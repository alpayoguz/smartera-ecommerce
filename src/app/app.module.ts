import { Badge, BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';
import { ProductsListService } from './products-list/products-list.service';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

const appRoute : Routes = [
  {path:"", redirectTo:"products-list", pathMatch:"full"},
  {path:"products-list", component:ProductsListComponent},
  {path:"product-details", component:ProductDetailsComponent},
  {path:"product-details/:productId/info", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"**", component:PageNotFoundComponent}
  // should be always last path on the configuration
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductsComponent,
    SafePipePipe,
    ProductDetailsComponent,
    PageNotFoundComponent,
    CartComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CardModule,
    BadgeModule
    
  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
