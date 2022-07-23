import { ProductsListService } from 'src/app/pages/products-list/products-list.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products-list/products-list.component';
import { faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[]
})
export class ProductsComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  products!: IProduct[];
  isModalActive= false
  deletedProductId!:number
  constructor(
    private pLService: ProductsListService,
    private confirmationService: ConfirmationService
  ) {}
  yazdir() {
    console.log('yehuu');
  }

  ngOnInit(): void {
    // this.pLService.getProductsData().subscribe((res) => {
    //   this.products = res;
    //   console.log(this.products);
    // });
  }


  removeProduct() {
    this.products = this.products.filter((prdct) => prdct.id !== this.deletedProductId);
    this.products = this.orderArrayItems(this.products);
    this.setModalStatus();
  }

  orderArrayItems(productsArray: IProduct[]) {
    return productsArray.map((prdct, index) => ({ ...prdct, id: index + 1 }));
  }
  setDeletedProductId(id:number){
    this.deletedProductId = id
  }
  setModalStatus(id? :number){
    this.isModalActive = !this.isModalActive
    console.log(this.isModalActive)
    if(this.isModalActive){
      if(id !== undefined){
        this.setDeletedProductId(id)
      }
     
    }
  }
}
