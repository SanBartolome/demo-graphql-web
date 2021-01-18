import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { ProductsListModule } from '../../components/products-list/products-list.module';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [CommonModule, ListProductsRoutingModule, ProductsListModule],
})
export class ListProductsModule {}
