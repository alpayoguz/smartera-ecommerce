import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalProductNumber = 0;
  faCartShopping = faCartShopping;
  constructor(private router:Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalProductNumber = res.length
    } )
  }
  goToCart(){
    this.router.navigate(["/cart"]);
  }
  goToHome(){
    this.router.navigate(["/"])
  }

}
