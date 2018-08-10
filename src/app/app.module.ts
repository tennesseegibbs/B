import { WalletService } from './../providers/wallet-service';
import { TransactionService } from './../providers/transaction-service';
import { PaymentService } from './../providers/payment-service';
import { TransactionPage } from './../pages/transactions/transactions';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WalletPageModule } from '../pages/wallet/wallet.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TransactionPageModule } from '../pages/transactions/transactions.module';
import { PaymentPage } from './../pages/payment/payment';
import { PaymentPageModule } from '../pages/payment/payment.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    WalletPageModule,
    TransactionPageModule,
    PaymentPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TransactionPage,
    PaymentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaymentService,
    TransactionService,
    WalletService
  ]
})
export class AppModule {}
