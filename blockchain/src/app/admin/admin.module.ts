import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AdminRoutingModule } from "./admin.routing";
import { ComponentsModule } from "./components/components.module";


@NgModule({
  declarations: [AdminLayoutComponent, AuthLayoutComponent],
  providers: [],
  bootstrap: [],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    NgbModule,
    RouterModule.forChild(AdminRoutingModule)
  ]
})
export class AdminModule { }
