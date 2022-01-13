import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { HomeComponent } from './home/home.component';
import { OrderAbortedComponent } from './order-aborted/order-aborted.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderComponent } from './order/order.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DetailsProductComponent } from './product/details-product/details-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { CreateProductionComponent } from './production/create-production/create-production.component';
import { ProductionComponent } from './production/production.component';
import { ProfileComponent } from './profile/profile.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path: '', component: DashbroadComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'warehouse', component: WarehouseComponent},
      {path: 'employee-manager', component: EmployeeManagerComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'product', component: ProductComponent},
      {path: 'product/details', component: DetailsProductComponent},
      {path: 'product/create', component: CreateProductComponent},
      {path: 'product/edit', component: EditProductComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'category/create', component: CreateCategoryComponent},
      {path: 'production', component: ProductionComponent},
      {path: 'production/create', component: CreateProductionComponent},
      {path: 'order', component: OrderComponent},
      {path: 'order-confirmation', component: OrderConfirmationComponent},
      {path: 'order/details', component: OrderDetailsComponent},
      {path: 'order/confirmed', component: OrderConfirmedComponent},
      {path: 'order/aborted', component: OrderAbortedComponent},
      {path: '', redirectTo:'./dashboard', pathMatch:'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
