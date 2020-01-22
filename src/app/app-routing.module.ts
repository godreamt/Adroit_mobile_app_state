import { AuthGaurd } from './shared/services/auth-gaurd.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VendorUpdateResolver } from './vendor/vendor-update/vendor.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'home',
    canActivate: [AuthGaurd],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'purchase-vendor-list', 
    canActivate: [AuthGaurd],
    loadChildren: './purchase/purchase-update/vendor-list/vendor-list.module#VendorListPageModule' 
  },
  { 
    path: 'new-purchase',
    canActivate: [AuthGaurd], 
    loadChildren: './purchase/purchase-update/new-purchase/new-purchase.module#NewPurchasePageModule' 
  },
  { 
    path: 'purchase-list', 
    canActivate: [AuthGaurd],
    loadChildren: './purchase/purchase-list/purchase-list.module#PurchaseListPageModule' 
  },
  { 
    path: 'purchase-view', 
    loadChildren: './purchase/view-purchase/view-purchase.module#ViewPurchasePageModule' 
  },
  { 
    path: 'my-vendors', 
    loadChildren: './vendor/my-vendors/my-vendors.module#MyVendorsPageModule' 
  },
  { 
    path: 'view-my-vendors', 
    loadChildren: './vendor/view-my-vendors/view-my-vendors.module#ViewMyVendorsPageModule' 
  },
  { 
    path: 'collection-update/:id', 
    loadChildren: './collection/collection-update/collection-update.module#CollectionUpdatePageModule' 
  },
  { 
    path: 'collection-list', 
    loadChildren: './collection/collection-list/collection-list.module#CollectionListPageModule' 
  },
  { 
    path: 'collection-view', 
    loadChildren: './collection/collection-view/collection-view.module#CollectionViewPageModule' 
  },
  { 
    path: 'expense-list', 
    loadChildren: './expense/expense-list/expense-list.module#ExpenseListPageModule' 
  },
  { 
    path: 'expense-update', 
    loadChildren: './expense/expense-update/expense-update.module#ExpenseUpdatePageModule' 
  },
  { 
    path: 'expense-view', 
    loadChildren: './expense/expense-view/expense-view.module#ExpenseViewPageModule' 
  },
  { 
    path: 'vendor-update', 
    loadChildren: './vendor/vendor-update/vendor-update.module#VendorUpdatePageModule' 
  },
  { 
    path: 'vendor-update/:id', 
    resolve: {user: VendorUpdateResolver},
    loadChildren: './vendor/vendor-update/vendor-update.module#VendorUpdatePageModule' 
  },
  { path: 'monthly-report', loadChildren: './monthly-report/monthly-report.module#MonthlyReportPageModule' },
  { path: 'monthly-report/:userId', loadChildren: './monthly-report/monthly-report.module#MonthlyReportPageModule' },  { path: 'under-users', loadChildren: './under-users/under-users.module#UnderUsersPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
