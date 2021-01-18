import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProductSecondStepComponent } from './edit-product-second-step.component';

const routes: Routes = [{ path: '', component: EditProductSecondStepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductSecondStepRoutingModule { }
