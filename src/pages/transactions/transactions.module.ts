import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionPage } from './transactions';
import { TransactionService } from '../../providers/transaction-service';


@NgModule({
  declarations: [
   TransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionPage),
  ],
  providers: [
    TransactionService,
  ],
})
export class TransactionPageModule {}
