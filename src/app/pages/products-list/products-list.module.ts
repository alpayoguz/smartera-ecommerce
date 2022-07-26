import { FormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,   
  ]
  ,exports:[ProductsListComponent]
})
export class ProductsListModule { }
