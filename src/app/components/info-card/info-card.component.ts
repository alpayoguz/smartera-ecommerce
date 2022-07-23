import { Component, OnInit, Input } from '@angular/core';
import { ProductsListService } from 'src/app/pages/products-list/products-list.service';
import { IProduct } from 'src/app/pages/products-list/products-list.component';
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() value = 0;
  @Input() title = "";
  @Input() isPrice!:boolean

  constructor(private productsListService: ProductsListService) {
   }

  ngOnInit(): void {
   
  }

}
