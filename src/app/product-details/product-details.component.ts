import { ProductsListService } from './../products-list/products-list.service';
import { ProductService } from './../product.service';
import { ProductsListComponent } from './../products-list/products-list.component';
import { IProduct } from '../products-list/products-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  product?:IProduct
  

  constructor(private _productService : ProductService, private route: ActivatedRoute) { 
    
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    console.log(typeof productIdFromRoute);
    this._productService.getSingleProductData(productIdFromRoute)
    .subscribe(data => this.product = data)

    
  }
}
