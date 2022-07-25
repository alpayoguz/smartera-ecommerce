import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  isFormOpen=false
  formStatus = new BehaviorSubject(this.isFormOpen)


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


