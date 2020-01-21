import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPurchasePage } from './view-purchase.page';
import { PurchaseResolver } from './purchase-resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ViewPurchasePage,
    resolve: {order: PurchaseResolver}
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewPurchasePage]
})
export class ViewPurchasePageModule {}
