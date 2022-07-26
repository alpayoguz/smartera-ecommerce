import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

const appRoutes : Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"products-list", component:ProductsListComponent},
  {path:"products", component:ProductsComponent},
  {path:"product-details", component:ProductDetailsComponent},
  {path:"product-details/:productId/info", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"**", component:PageNotFoundComponent}
  // should be always last path on the configuration
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
