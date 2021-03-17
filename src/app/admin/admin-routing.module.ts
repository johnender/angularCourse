import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component'
import { NavComponent } from './components/nav/nav.component'
import { ListProductsComponent} from './components/list-products/list-products.component'
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { ProductsListComponent} from './components/products-list/products-list.component'

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path:'table',
        component: ListProductsComponent 
      },
      {
        path:'dash',
        component: DashboardComponent
      },
      {
        path:'products',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
