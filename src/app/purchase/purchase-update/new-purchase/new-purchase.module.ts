import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPurchasePage } from './new-purchase.page';
import { AddProductPage } from './add-product/add-product.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserResolver } from './user-resolver';

const routes: Routes = [
  {
    path: ':vendorId',
    component: NewPurchasePage,
    resolve: {'user': UserResolver}
  }
];

@NgModule({
  entryComponents: [
    AddProductPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [NewPurchasePage, AddProductPage]
})
export class NewPurchasePageModule {}
