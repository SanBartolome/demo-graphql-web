import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProductFirstStepComponent } from './edit-product-first-step.component';

const routes: Routes = [{ path: '', component: EditProductFirstStepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductFirstStepRoutingModule { }
