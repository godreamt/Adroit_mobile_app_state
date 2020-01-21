import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpenseViewPage } from './expense-view.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseResolver } from './expense.resolver';

const routes: Routes = [
  {
    path: ':expenseId',
    component: ExpenseViewPage,
    resolve: {expense : ExpenseResolver}
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
  declarations: [ExpenseViewPage]
})
export class ExpenseViewPageModule {}
