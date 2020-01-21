import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewMyVendorsPage } from './view-my-vendors.page';
import { UserResolver } from 'src/app/purchase/purchase-update/new-purchase/user-resolver';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: ':vendorId',
    component: ViewMyVendorsPage,
    resolve: {vendor: UserResolver}
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ViewMyVendorsPage]
})
export class ViewMyVendorsPageModule {}
