import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { InfoCardComponent } from 'src/app/components/info-card/info-card.component';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';



@NgModule({
  declarations: [
    InfoCardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    NavbarModule

  ]
})
export class DashboardModule { }
