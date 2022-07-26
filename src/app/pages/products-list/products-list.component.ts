import { ProductsService } from 'src/app/pages/products/products.service';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product-details/product.service';
import { ProductsListService } from './products-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  valid: true;
  editFieldName: string;
  quantity?: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private router: Router,
    private _productsListService: ProductsListService,
    private productService: ProductService,
    private cartService: CartService,
    private cartService2: CartService,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this._productsListService.getProductsData().subscribe(
      (data) => {
        this.products = this.productsService.changeProductProps(data);
      },
      (error) => {
        console.log(error);
      },
      () => console.log('Fetched completed')
    );
  }

  addToCart(event: any, product: any) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }
  goToProductDetails(id: number) {
    this.router.navigate([`/product-details/${id}/info`]);
  }
}
