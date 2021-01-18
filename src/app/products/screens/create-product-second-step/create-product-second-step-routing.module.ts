import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductSecondStepComponent } from './create-product-second-step.component';

const routes: Routes = [{ path: '', component: CreateProductSecondStepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductSecondStepRoutingModule { }
