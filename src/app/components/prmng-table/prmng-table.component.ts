import { ProductsService } from 'src/app/pages/products/products.service';
import { IProduct } from 'src/app/pages/products-list/products-list.component';
import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/pages/products-list/products-list.service';

@Component({
  selector: 'app-prmng-table',
  templateUrl: './prmng-table.component.html',
  styleUrls: ['./prmng-table.component.scss'],
})
export class PrmngTableComponent implements OnInit {
  selectedColumns:any = [
  ];
  products: IProduct[] = [];
  constructor(
    private plService: ProductsListService,
    private productsService: ProductsService
  ) {}
  cols=[
    {value: 'id', header: 'Id'},
    { value: 'name', header: 'Name' },
    {value:"description", header:"Description"},
    { value: 'category', header: 'Category' },
    { value: 'price', header: 'Price' },
    { value: 'stock', header: 'Stock' },
  ];
  ngOnInit(): void {
    this.plService
      .getProductsData()
      .subscribe(
        (data: any) =>
          (this.products = this.productsService.changeProductProps(data))
      );
      this.selectedColumns = [
        {value: 'id', header: 'Id'},
        { value: 'name', header: 'Name' },
        {value:"description", header:"Description"},
        { value: 'category', header: 'Category' },
        { value: 'price', header: 'Price' },
        { value: 'stock', header: 'Stock' },
      ];
  }
}
