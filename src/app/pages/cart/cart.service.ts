import { IProduct } from 'src/app/pages/products-list/products-list.component';
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
  getTotalPriceOfCart(){
   return this.cartItemList.map((prdct:IProduct) => prdct.quantity! * prdct.price)
    
  }
  
  getTotalCartItems(){
    // const allItemsQuanti
  }
  addToCart(product:any){
    const existingProduct = this.cartItemList.find((item:any) => item.id === product.id);
    if(existingProduct){
     this.cartItemList = this.cartItemList.map((item:any)=> {
        if(item.id === existingProduct.id){
          return {...item, quantity: item.quantity + 1}
        }
        return item
      } )
    }else{
      this.cartItemList.push({...product, quantity:1});
    }
    this.productList.next(this.cartItemList);
    // this.getTotalPrice();
  }
  removeCartItem(product: any){
   this.cartItemList = this.cartItemList.filter((prdct:any) => prdct.id !== product.id)
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  increaseQuantity(product: any){ // it will manage product quantity in cartItems
    const existingItem = this.cartItemList.find((item:any) => item.id === product.id)
    this.cartItemList = this.cartItemList.map((item:any) => {
      if(existingItem.id === item.id){
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    this.productList.next(this.cartItemList);
  }
  decreaseQuantity(product:any){ // it will manage product quantity in cartItems
   
    if(product.quantity === 1){
     this.cartItemList = this.cartItemList.filter((prdct:any) => prdct.id !== product.id )
    }else{
     const existingItem = this.cartItemList.find((item:any) => item.id === product.id)
     this.cartItemList = this.cartItemList.map((item:any) => {
      if(existingItem.id === item.id){
        return {...item, quantity:item.quantity - 1}
      }
      return item
     } )
    }
    this.productList.next(this.cartItemList);
  }
}
