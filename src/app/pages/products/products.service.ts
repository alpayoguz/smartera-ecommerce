import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  isFormOpen=false
  formStatus = new BehaviorSubject(this.isFormOpen)
  
  // this function will take 'rating.count' property of product 
  // and turn into a new property named 'stock' and take 'title'
  // propert and turn into a new prperty named 'name' and add 
   // new properties named 'valid' and 'editFieldName' 
  changeProductProps(prdcts: any){ 
    const newArray = prdcts.map((item:any) => {
       const {rating,title,...rest } = item
       const newObject = {name:title,stock:rating.count,valid:true,editFieldName:"", ...rest}
       return newObject
     } )
     return newArray
   }


  getFormStatus(){
    return this.formStatus.asObservable();
  }
  setFormStatusTrue(){  
    this.isFormOpen = true
    this.formStatus.next(this.isFormOpen)
  }
  setFormStatusFalse(){  
    this.isFormOpen = false
    this.formStatus.next(this.isFormOpen)
  }

  columns = ["id", "Name", "Category","Price", "Stock"]
  delayFunc(time:number, callback:Function, ){
    setTimeout(()=>{
      callback()
    }, time)
  }
}


