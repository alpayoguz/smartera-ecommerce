import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
