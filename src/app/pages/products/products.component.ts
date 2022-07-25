import { ProductService } from './../product-details/product.service';
import { ProductsListService } from 'src/app/pages/products-list/products-list.service';
import { Component, OnInit} from '@angular/core';
import { IProduct } from '../products-list/products-list.component';
import { faTrash, faCheck, faTimes, faEyeSlash, faColumns } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './products.service';
interface AlertObject{
  isAlertVisible : boolean,
  alertMessage:string,
  alertType:string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [],
})
export class ProductsComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faEyeSlash = faEyeSlash;

  products!: IProduct[];

  
  isModalActive = false;
  isFormActive = true;
  alertObject : AlertObject = {
    isAlertVisible : false,
    alertMessage:"",
    alertType:""
  }
  deletedProductId!: number;
  columns = this.productsService.columns

  columnsHiddenStatus : any = {
    id:false,
    Category:false,
    Price:false,
    Stock:false,
    Name:false,
  }
    
  setIsColumnStatus(info:string){
    if(this.columnsHiddenStatus.hasOwnProperty(info)){
      this.columnsHiddenStatus[info] = !this.columnsHiddenStatus[info];
    }
  }

  
  // editable="true"
  constructor(
    private pLService: ProductsListService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private productsService:ProductsService
    
  ) {}
  ngOnInit(): void {
    this.pLService.getProductsData().subscribe((res) => {
      this.products = this.productsService.changeProductProps(res);
    });
  }
  createNewProduct(prdct:IProduct) {
    this.setAlertStatus( {
      isAlertVisible : true,
      alertMessage:"Item successfully added",
      alertType:"add"
    });
    let newProduct:any = prdct
    const lastItemId = this.products[this.products.length - 1].id;
    newProduct = {...newProduct, id:lastItemId + 1}
    this.products.push(newProduct);

  }
  removeProduct() {
    this.products = this.products.filter(
      (prdct) => prdct.id !== this.deletedProductId
    );
    this.products = this.orderArrayItems(this.products);
    this.setModalStatus();
    this.setAlertStatus({
      isAlertVisible : true,
      alertMessage:"Item removed",
      alertType:"remove"
    });
  }

  // this will give new index all products number when remove product from array
  orderArrayItems(productsArray: IProduct[]) {
    return productsArray.map((prdct, index) => ({ ...prdct, id: index + 1 }));
  }
  setDeletedProductId(id: number) {
    this.deletedProductId = id;
  }
  setModalStatus(id?: number) {
    this.isModalActive = !this.isModalActive;
    if (this.isModalActive) {
      if (id !== undefined) {
        this.setDeletedProductId(id);
      }
    }
  }
  setFormStatus() {
    this.productsService.setFormStatusTrue()
  }
  setAlertStatus(alert:AlertObject){
    this.alertObject.alertMessage = alert.alertMessage;
    this.alertObject.isAlertVisible = alert.isAlertVisible;
    this.alertObject.alertType = alert.alertType
    this.productsService.delayFunc(3000, ()=>{      this.alertObject.isAlertVisible = !this.alertObject.isAlertVisible
    })
  }
  
  editField(product:any, field:string){
    if(product.editFieldName === ""){
      this.products.forEach(prdct => prdct.editFieldName = "");
      product.editFieldName = field
    }else{
      product.editFieldName = ""
    }
  }
}
