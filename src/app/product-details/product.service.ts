import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProduct, ProductsListComponent } from '../products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  
  
  constructor(private http:HttpClient) { 

  }

  getSingleProductData(id:number):Observable<IProduct>{
    const _url = `https://fakestoreapi.com/products/${id}`
    return this.http.get<IProduct>(_url)
  }
}
