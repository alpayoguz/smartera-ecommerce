import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './products-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  _url = 'https://fakestoreapi.com/products'
  getProductsData(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }
  constructor(private http: HttpClient) {
   
   }
}
