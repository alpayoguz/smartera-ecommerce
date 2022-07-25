import { IProduct } from 'src/app/pages/products-list/products-list.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  faTimes  } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/pages/products/products.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

   isFormActive!:boolean
  @Output() newProductEvent = new EventEmitter();

  faTimes = faTimes

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
  clearFormInputs(){
    this.newProductForm.reset();
  }
  setFormStatusFalse() {
    this.isFormActive = false;
  }
  setFormStatusTrue() {
    this.isFormActive = true;
  }


  
  createNewItem(event: Event){
    event.preventDefault();
    this.newProductEvent.emit(this.newProductForm.value);
    this.setFormStatusFalse();
    this.clearFormInputs();


  }
  constructor( private fb: FormBuilder,private productsService : ProductsService) {}

  ngOnInit(): void {
    this.productsService.getFormStatus().
    subscribe(res => 
       this.isFormActive = res
      )

      this.productsService.getFormStatus()
      .subscribe(res => 
        {
          this.isFormActive = res
          console.log(this.isFormActive)
        }

        )
  }


}
