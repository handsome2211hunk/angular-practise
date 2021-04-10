import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: 'auth',
    // Lazy Loading Routes
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) // Syntax for Lazy Loading 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(
      m => m.DashboardModule
    )
  },
  {
    path: 'nihal',
    loadChildren: () => import('./modules/nihal/nihal.module').then(
     (m) => m.NihalModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
