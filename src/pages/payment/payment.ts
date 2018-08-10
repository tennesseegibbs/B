import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentService } from './../../providers/payment-service';
import { NgForm } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  fromId: string;
  toId: string;
  amount: number;
  private transactions: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public paymentService: PaymentService) {
  }

  ionViewDidLoad() {
    // this.paymentService.postTransactions( createAccountInfo : NgForm).subscribe(transactions => {
    //   this.transactions = transactions;
    // })


  }
  transferMoney(createAccountInfo : NgForm){
    this.paymentService.postTransactions(createAccountInfo).subscribe(data => console.log(data))

  }



}
