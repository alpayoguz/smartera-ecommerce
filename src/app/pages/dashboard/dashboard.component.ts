import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list/products-list.service';
import { IProduct } from '../products-list/products-list.component';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  constructor(private plService: ProductsListService, private dService: DashboardService, private cartService: CartService ) { }
  products : IProduct[] = []
  totalProductsCount = 0
  totalPriceOfProducts = 0; 
  dailyTotalSales = this.dService.getDailySale(100, 1000);
  todayBestSeller! :IProduct
  todayBestSellerId!:number
  cardInfos = [
    {
      title:"Total Products",
      value : this.totalProductsCount,
      isPrice:false
    },
    {
      title:"Total Revenue",
      value: this.totalPriceOfProducts,
      isPrice:true

    },
    {
      title:"Daily Total Sales",
      value: this.dailyTotalSales,
      isPrice:true

    },
  ]
  
  addToCart(){
    this.cartService.addToCart(this.todayBestSeller)
  }
  
  ngOnInit(): void {
    this.dService.getTodayBestSale()
    .subscribe(res => this.todayBestSellerId = res)
    this.plService.getProductsData()
    .subscribe((res)=>{
      this.cardInfos[0].value = this.dService.getCumulativeTotal(res);
      this.cardInfos[1].value = this.dService.getTotalRevenue(res);
      this.todayBestSeller = res[this.todayBestSellerId]
    })
  }
}
