import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpenseUpdatePage } from './expense-update.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { Camera } from '@ionic-native/camera';

const routes: Routes = [
  {
    path: '',
    component: ExpenseUpdatePage
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
  declarations: [ExpenseUpdatePage],
  providers: [
    // Camera
  ]
})
export class ExpenseUpdatePageModule {}
