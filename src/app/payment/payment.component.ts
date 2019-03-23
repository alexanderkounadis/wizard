import { WizardComponent } from './../wizard/wizard.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
@ViewChild(WizardComponent) public appWizard: WizardComponent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
