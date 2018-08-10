import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import { PaymentService } from '../../providers/payment-service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
    FormsModule
  ],
})
export class PaymentPageModule {}
