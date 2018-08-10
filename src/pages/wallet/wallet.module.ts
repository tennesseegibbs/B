import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletPage } from './wallet';
import { WalletService } from '../../providers/wallet-service';

@NgModule({
  declarations: [
    WalletPage,
  ],
  imports: [
    IonicPageModule.forChild(WalletPage),
  ],
  providers: [
    WalletService,
  ],
})
export class WalletPageModule {}
