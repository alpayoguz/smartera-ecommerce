import { Component, OnInit } from '@angular/core';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faUser = faUser
  faKey = faKey

  loginForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(5),

    ]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(8)
    ])
  })

  
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  handleSubmit(event:Event){
    event.preventDefault();
    this.router.navigate(["dashboard"])

  }

}
