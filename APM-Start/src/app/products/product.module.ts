import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-list/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from '../product-guard.service';
import { ProductService } from '../product.service';
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
