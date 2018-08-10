import { PaymentPage } from './../payment/payment';
import { TransactionPage } from './../transactions/transactions';
import { WalletPage } from './../wallet/wallet';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PaymentPage;
  tab3Root = TransactionPage;
  tab4Root = WalletPage;

  constructor() {

  }
}
