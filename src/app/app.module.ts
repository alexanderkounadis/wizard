import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardRefDirective } from './wizard/directives/wizard-ref.directive';
import { WizardHeaderRefDirective } from './wizard/directives/wizard-header-ref.directive';
import { WizardFooterRefDirective } from './wizard/directives/wizard-footer-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardRefDirective,
    WizardHeaderRefDirective,
    WizardFooterRefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
