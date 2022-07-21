import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   cartItemList : any =  []
   productList = new BehaviorSubject([])
  
  constructor() {}
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  getTotalPrice(){
    let totalPrice = 0;
    this.cartItemList.map((a:any)=> totalPrice += a.total)
    
  }
  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  removeCartItem(product: any){
   this.cartItemList = this.cartItemList.filter((prdct:any) => prdct.id !== product.id)
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
