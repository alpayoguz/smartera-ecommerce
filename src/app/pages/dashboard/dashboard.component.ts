import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list/products-list.service';
import { IProduct } from '../products-list/products-list.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  constructor(private plService: ProductsListService, private dService: DashboardService) { }
  products : IProduct[] = []
  totalProductsCount = 0
  totalPriceOfProducts = 0; 
  dailyTotalSales = this.dService.getDailySale(100, 1000);
  todayBestSeller! :IProduct
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
  

  ngOnInit(): void {
    this.plService.getProductsData()
    .subscribe((res)=>{
      this.cardInfos[0].value = this.dService.getCumulativeTotal(res);
      this.cardInfos[1].value = this.dService.getTotalRevenue(res);
      this.todayBestSeller = res[this.dService.getRandomNummber()]
    })
  }
}
