import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CollectionViewPage } from './collection-view.page';
import { CollectionResolver } from './collection.resolver';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: CollectionViewPage,
    resolve: {collection: CollectionResolver}
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
  declarations: [CollectionViewPage]
})
export class CollectionViewPageModule {}
