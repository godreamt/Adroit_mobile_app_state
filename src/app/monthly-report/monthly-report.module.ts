import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonthlyReportPage } from './monthly-report.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonthlyReportPage]
})
export class MonthlyReportPageModule {}
