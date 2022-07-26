import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes } from '@angular/router';
import { SafePipePipe } from 'src/app/safe-pipe.pipe';




@NgModule({
  declarations: [NavbarComponent, SafePipePipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    NavbarComponent,
    SafePipePipe
  ]
})
export class NavbarModule { }
