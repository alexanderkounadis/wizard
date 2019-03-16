import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWizardHeaderRef]'
})
export class WizardHeaderRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
