import { WalletService } from './../../providers/wallet-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  private wallets: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public walletService: WalletService) {
  }

  ionViewDidLoad() {
    this.walletService.getWalletAmount().subscribe(wallets => {
      this.wallets = wallets;
    })
  }

}
