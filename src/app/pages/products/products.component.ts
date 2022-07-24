import { ProductsListService } from 'src/app/pages/products-list/products-list.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products-list/products-list.component';
import { faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';

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
  products!: IProduct[];
  isModalActive = false;
  isFormActive = false;
  deletedProductId!: number;

  newProductForm  = this.fb.group({
    id:0,
    title: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    isValid:true
  });
  constructor(
    private pLService: ProductsListService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.pLService.getProductsData().subscribe((res) => {
      this.products = this.arrangeStockForProducts(res);
      console.log(this.products);
    });
  }
  // handleNewProduct() {
  //   this.createNewProduct(this.newProductForm.value);
  // }

  createNewProduct(event:Event) {
    event.preventDefault();
    let newProduct:any = this.newProductForm.value;
    // console.log(this.newProductForm.value)
    // console.log(newProduct);
    const lastItemId = this.products[this.products.length - 1].id;
    newProduct = {...newProduct, id:lastItemId + 1}
    this.products.push(newProduct);
    this.setFormStatus();
    // this.clearFormInputs();
  }

  removeProduct() {
    this.products = this.products.filter(
      (prdct) => prdct.id !== this.deletedProductId
    );
    this.products = this.orderArrayItems(this.products);
    this.setModalStatus();
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
    // console.log(this.createProductForm.value);
    this.isFormActive = !this.isFormActive;
    this.clearFormInputs();
  }
  clearFormInputs(){
    this.newProductForm.reset();
  }

  // this function will take rating.count property of product 
  // and turn into a new property named 'stock' and  add 
   // new property named 'valid'
  arrangeStockForProducts(prdcts: any){ 
   const arrangedArray = prdcts.map((item:any) => {
      const {rating,...rest } = item
      const arrangedObject = {stock:rating.count,valid:true, ...rest}
      return arrangedObject
    } )
    return arrangedArray
  }
}
