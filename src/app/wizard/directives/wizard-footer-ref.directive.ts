import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWizardFooterRef]'
})
export class WizardFooterRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
