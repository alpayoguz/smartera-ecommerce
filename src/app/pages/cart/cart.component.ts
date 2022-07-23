import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems?:any

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res)=>{
      this.cartItems = res
    })
  }
  increaseQuantity(product: any){ // it will manage product quantity in cartItems
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product:any){ // it will manage product quantity in cartItems
    this.cartService.decreaseQuantity(product);
  }

 

}
