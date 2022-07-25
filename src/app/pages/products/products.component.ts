import { ProductService } from './../product-details/product.service';
import { ProductsListService } from 'src/app/pages/products-list/products-list.service';
import { Component, OnInit} from '@angular/core';
import { IProduct } from '../products-list/products-list.component';
import { faTrash, faCheck, faTimes, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
  columns = this.productsService.columns
 
  
  deletedProductId!: number;
  editable="true"

  newProductForm  = this.fb.group({
    id:0,
    title: ['',  [Validators.required, Validators.minLength(5)]],
    description: ['',  [Validators.required, Validators.minLength(5)]],
    category: ['',  [Validators.required,  Validators.minLength(3)]],
    price: [0,  Validators.required],
    stock: [0,  Validators.required],
    valid:true,
    editFieldName:""
  },
  );
  constructor(
    private pLService: ProductsListService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private productsService:ProductsService
    
  ) {}
  ngOnInit(): void {
    this.pLService.getProductsData().subscribe((res) => {
      this.products = this.arrangeStockForProducts(res);
      console.log(this.products);
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
    
    this.clearFormInputs();
  }
  setAlertStatus(alert:AlertObject){
    this.alertObject.alertMessage = alert.alertMessage;
    this.alertObject.isAlertVisible = alert.isAlertVisible;
    this.alertObject.alertType = alert.alertType
    this.productsService.delayFunc(3000, ()=>{      this.alertObject.isAlertVisible = !this.alertObject.isAlertVisible
    })
  }
  clearFormInputs(){
    this.newProductForm.reset();
  }

  // this function will take rating.count property of product 
  // and turn into a new property named 'stock' and  add 
   // new properties named 'valid' and 'editFieldName' 
  arrangeStockForProducts(prdcts: any){ 
   const arrangedArray = prdcts.map((item:any) => {
      const {rating,...rest } = item
      const arrangedObject = {stock:rating.count,valid:true,editFieldName:"", ...rest}
      return arrangedObject
    } )
    return arrangedArray
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
