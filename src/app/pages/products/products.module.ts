import { NavbarModule } from './../../components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { ProductsComponent } from './products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckboxComponent,
    ProductFormComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports:[ProductsComponent]
})
export class ProductsModule { }
