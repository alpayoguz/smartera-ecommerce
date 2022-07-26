import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ProductDetailsRoutingModule
  ],
  exports:[ProductDetailsComponent]
})
export class ProductDetailsModule { }
