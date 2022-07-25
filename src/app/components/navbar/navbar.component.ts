import { CartService } from '../../pages/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalProductNumber = 0;
  faCartShopping = faCartShopping;
  faBars = faBars;
  isExpanded = false
  constructor(private router:Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalProductNumber = res.length
    } )
  }
  goToUrl(url:string){
    this.router.navigate([`${url}`]);
  }
  expandNavItems(){
    this.isExpanded = !this.isExpanded
  }

}

