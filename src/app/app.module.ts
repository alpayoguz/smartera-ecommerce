import { ProductDetailsModule } from './pages/product-details/product-details.module';
import {BadgeModule } from 'primeng/badge';
import { ProductsListService } from './pages/products-list/products-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { PrmngTableComponent } from './components/prmng-table/prmng-table.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { PrimeIcons } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,  
    PageNotFoundComponent,
    LoginComponent,
    PrmngTableComponent,
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
    ProductDetailsModule,
    TableModule,
    MultiSelectModule  

  
  ],
  providers: [ProductsListService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
