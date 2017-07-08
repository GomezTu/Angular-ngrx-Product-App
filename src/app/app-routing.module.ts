import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { 
      path: 'who-are-we',
      loadChildren: 'app/who-are-we/who-are-we.module#WhoAreWeModule'
    },
    { 
      path: 'products',
      loadChildren: 'app/products/products.module#ProductsModule'
    },
    { 
      path: 'contact',
      loadChildren: 'app/contact/contact.module#ContactModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
