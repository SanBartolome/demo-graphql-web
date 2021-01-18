import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductSecondStepRoutingModule } from './edit-product-second-step-routing.module';
import { EditProductSecondStepComponent } from './edit-product-second-step.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProductSecondStepComponent],
  imports: [CommonModule, EditProductSecondStepRoutingModule, FormsModule],
})
export class EditProductSecondStepModule {}
