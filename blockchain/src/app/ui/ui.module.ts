import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports:[LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UiModule { }
