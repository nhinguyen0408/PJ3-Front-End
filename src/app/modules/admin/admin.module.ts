import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DetailsProductComponent } from './product/details-product/details-product.component';
import { CategoryComponent } from './category/category.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { OrderAbortedComponent } from './order-aborted/order-aborted.component';
import { ProductionComponent } from './production/production.component';
import { CreateProductionComponent } from './production/create-production/create-production.component';
import { EditProductionComponent } from './production/edit-production/edit-production.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';


@NgModule({
  declarations: [
    DashbroadComponent,
    NavComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    HomeComponent,
    WarehouseComponent,
    ProfileComponent,
    EmployeeManagerComponent,
    CreateProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    CategoryComponent,
    OrderConfirmationComponent,
    OrderComponent,
    OrderDetailsComponent,
    OrderConfirmedComponent,
    OrderAbortedComponent,
    ProductionComponent,
    CreateProductionComponent,
    EditProductionComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminModule]
})
export class AdminModule { }
