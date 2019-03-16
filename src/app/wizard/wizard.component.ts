import { WizardRefDirective } from './directives/wizard-ref.directive';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable, PartialObserver } from 'rxjs';
import { WizardFooterRefDirective } from './directives/wizard-footer-ref.directive';
import { WizardItem } from './wizard-item';
import { WizardFooter } from './wizard-footer';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  @ViewChild(WizardRefDirective) wizardRef: WizardRefDirective;
  @ViewChild(WizardFooterRefDirective) wizardFooterRef: WizardFooterRefDirective;

  public currentItem: WizardItem<any, any>;
  public footer: WizardFooter;
  public currentIndex: number;
  public lastIndex: number;
  private wizardItems: Type<any>[] = new Array<Type<any>>();
  private wizardFooter: Type<any>;
  public wizardTitles: string[] = new Array<string>();
  public model: any;
  public inProcess =  false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public addItem(stepType: Type<any>, title: string, isLast: boolean = false, data: object = {}){
    this.wizardItems.push(stepType);
    this.wizardTitles.push(title);
    if(isLast){
      this.lastIndex = this.wizardItems.length -1;
      this.loadComponent(0);
    }
  }

  public addFooter(footerType: Type<any>): any {
    this.wizardFooter = footerType;
    const componentFooterFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.wizardFooter
    );
    const viewContainerRef = this.wizardFooterRef.viewContainerRef;
    viewContainerRef.clear();
    this.footer = <WizardFooter>viewContainerRef.createComponent(componentFooterFactory).instance;
  }

  setModel(model: any){
    this.model = model;
  }
  
  loadComponent(index: number){
    const componentItemFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.wizardItems[index]
    );
    const viewContainerRef = this.wizardRef.viewContainerRef;
    viewContainerRef.clear();

    this.currentItem = <WizardItem<any, any>>(
      viewContainerRef.createComponent(componentItemFactory).instance
    );

    // Apply shared model
    this.currentItem.model = this.model;
    this.currentIndex = index;

    if(this.footer){

    }
  }

  public next(){
    this.onNavigating(this.currentItem.progress(), {
      next: result => {
        if(result && result.value !== false) {
          this.loadComponent(++this.currentIndex);
        }
      },
      error: error => {
        // event service logic here
        console.log(error);
      }
    })
  }

  public previous() {
    this.onNavigating(this.currentItem.previous(), {
      next: result => {
        if(this.currentIndex === this.lastIndex){
          this.loadComponent(0);
        }else{
          this.loadComponent(--this.currentIndex);
        }
      },
      error: error=>{
        // event service logic here
        console.log(error);
      }
    })
  }

  private onNavigating(observable: Observable<any>, observer: PartialObserver<any>) : void {
    this.inProcess = true;
    observable.pipe(
      finalize(() => {
        this.inProcess = null;
      })
    )
    .subscribe(observer);
  }

  ngOnInit() {
  }

}
