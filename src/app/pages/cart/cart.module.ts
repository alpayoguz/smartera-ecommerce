import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SafePipePipe } from 'src/app/safe-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    NavbarModule,
    CartRoutingModule,
    
    
  ]
})
export class CartModule { }
