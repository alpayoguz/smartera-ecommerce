import { products } from './../products';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = products
  @Output() tetikleyici = new EventEmitter()
  share(){
    alert("Product shared")
  }
  onNotify(){
    alert("Child component olan product-alerts bir EventEmitter yaydı. Bende bilgi sahibi oldum")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
