import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from '../products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  todaysBestSale = new BehaviorSubject(this.getRandomNummber())

  getTodayBestSale(){
    return this.todaysBestSale.asObservable();
  }
  getCumulativeTotal(products: IProduct[]):number{ // sums array items 
    const productsCount = products.map(item => item.stock);
    return productsCount.reduce((curVal, prevVal) => curVal + prevVal, 0)
  }
  getTotalRevenue(products: IProduct[]){ // sums total price of all products
    const prices = products.map(item => item.price);
    return Math.floor(prices.reduce((curVal, prevVal) => curVal + prevVal, 0))
  }

  getDailySale(min:number, max:number){
    const minVal = min;
    const maxVal = max;
    const difference = maxVal - minVal
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * difference);
    randomNumber += minVal
    return randomNumber;
  }

  getRandomNummber():number{
    const randomNumber = Math.floor(Math.random() * 21);
    return randomNumber
  }

  

  constructor() { }
}
