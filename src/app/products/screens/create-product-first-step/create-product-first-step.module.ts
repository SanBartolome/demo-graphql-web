import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductFirstStepRoutingModule } from './create-product-first-step-routing.module';
import { CreateProductFirstStepComponent } from './create-product-first-step.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProductFirstStepComponent],
  imports: [CommonModule, CreateProductFirstStepRoutingModule, FormsModule],
})
export class CreateProductFirstStepModule {}
