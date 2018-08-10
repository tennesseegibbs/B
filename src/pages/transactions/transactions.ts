import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionService } from './../../providers/transaction-service';


@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionPage {
  private transactions: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public transactionsService: TransactionService) {
  }

  ionViewDidLoad() {
    this.transactionsService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    })
  }

}
