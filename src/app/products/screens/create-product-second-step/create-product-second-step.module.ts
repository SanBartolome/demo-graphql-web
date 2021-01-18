import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductSecondStepRoutingModule } from './create-product-second-step-routing.module';
import { CreateProductSecondStepComponent } from './create-product-second-step.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProductSecondStepComponent],
  imports: [CommonModule, CreateProductSecondStepRoutingModule, FormsModule],
})
export class CreateProductSecondStepModule {}
