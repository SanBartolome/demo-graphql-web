import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductFirstStepComponent } from './create-product-first-step.component';

const routes: Routes = [{ path: '', component: CreateProductFirstStepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductFirstStepRoutingModule { }
