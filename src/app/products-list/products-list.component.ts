import { ProductService } from './../product.service';
import { ProductsListService } from './products-list.service';
import { Component, OnInit } from '@angular/core';

export interface IProduct{
  id:number
  title:string,
  price:number,
  description:string,
  image: string,
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:IProduct[] = []
  

  constructor(private _productsListService:ProductsListService, private productService: ProductService) { 
  }

  ngOnInit(): void {
    this._productsListService.getProductsData()
    .subscribe(data => this.products = data )    
  }
}
