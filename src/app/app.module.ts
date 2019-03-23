import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardRefDirective } from './wizard/directives/wizard-ref.directive';
import { WizardHeaderRefDirective } from './wizard/directives/wizard-header-ref.directive';
import { WizardFooterRefDirective } from './wizard/directives/wizard-footer-ref.directive';
import { PaymentComponent } from './payment/payment.component';
import { PaymentStep1Component } from './payment/steps/payment-step1/payment-step1.component';
import { PaymentStep2Component } from './payment/steps/payment-step2/payment-step2.component';
import { PaymentStep3Component } from './payment/steps/payment-step3/payment-step3.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardRefDirective,
    WizardHeaderRefDirective,
    WizardFooterRefDirective,
    PaymentComponent,
    PaymentStep1Component,
    PaymentStep2Component,
    PaymentStep3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
