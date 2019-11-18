import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'




@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule
  ]
})
export class UserModule { }
