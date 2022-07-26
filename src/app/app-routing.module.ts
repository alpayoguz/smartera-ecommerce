import { PrmngTableComponent } from './components/prmng-table/prmng-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


const appRoutes : Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"table", component:PrmngTableComponent},
  {path:"dashboard", loadChildren:()=> import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)},
  {path:"products-list", loadChildren:()=>import("./pages/products-list/products-list.module").then(m=>m.ProductsListModule)},
  {path:"products", loadChildren:()=> import("./pages/products/products.module").then(m => m.ProductsModule)},
  {path:"product-details", component:ProductDetailsComponent},
  {path:"product-details/:productId/info", component:ProductDetailsComponent},
  // {path:"product-details/:productId/info",loadChildren:()=> import("./pages/product-details/product-details.module").then(m => m.ProductDetailsModule)},
  {path:"cart", loadChildren:()=> import("./pages/cart/cart.module").then(m => m.CartModule)},
  {path:"**", component:PageNotFoundComponent}
  // should be always last path on the configuration
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
