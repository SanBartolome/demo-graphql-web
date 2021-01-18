import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductBloc } from '../../blocs/create-product.bloc';

@Component({
  selector: 'app-create-product-first-step',
  templateUrl: './create-product-first-step.component.html',
  styleUrls: ['./create-product-first-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductFirstStepComponent implements OnInit {
  productName: string;
  productDescription: string;
  productKeywords: string;

  constructor(public createProduct: CreateProductBloc, private router: Router) {
    this.productName = this.createProduct.productInfo.value?.name;
    this.productDescription = this.createProduct.productInfo.value?.description;
    this.productKeywords = this.createProduct.productInfo.value?.keywords;
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.createProduct.setStep1Info({
      name: this.productName,
      description: this.productDescription,
      keywords: this.productKeywords,
    });
    this.router.navigate(['/create-product-second-step']);
  }
}
