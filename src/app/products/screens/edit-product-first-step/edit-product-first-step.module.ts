import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductFirstStepRoutingModule } from './edit-product-first-step-routing.module';
import { EditProductFirstStepComponent } from './edit-product-first-step.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProductFirstStepComponent],
  imports: [CommonModule, EditProductFirstStepRoutingModule, FormsModule],
})
export class EditProductFirstStepModule {}
