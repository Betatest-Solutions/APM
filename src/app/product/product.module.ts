import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent }
    ]),
    BrowserModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
