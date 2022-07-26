import { ProductDetailsModule } from './pages/product-details/product-details.module';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { ProductsModule } from './pages/products/products.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { Badge, BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { ProductsListService } from './pages/products-list/products-list.service';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsComponent } from './pages/products/products.component';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,  
    // ProductDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CardModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    ProductDetailsModule
  
  ],
  providers: [ProductsListService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
