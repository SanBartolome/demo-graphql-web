import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProductBloc } from '../../blocs/edit-product.bloc';

@Component({
  selector: 'app-edit-product-first-step',
  templateUrl: './edit-product-first-step.component.html',
  styleUrls: ['./edit-product-first-step.component.scss'],
})
export class EditProductFirstStepComponent implements OnInit {
  productName: string;
  productDescription: string;
  productKeywords: string;
  productId: string;

  constructor(
    public editProduct: EditProductBloc,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.productName = this.editProduct.productInfo.value?.name;
    this.productDescription = this.editProduct.productInfo.value?.description;
    this.productKeywords = this.editProduct.productInfo.value?.keywords;
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.editProduct.setStep1Info({
      name: this.productName,
      description: this.productDescription,
      keywords: this.productKeywords,
    });
    this.router.navigate([`/edit-product-second-step/${this.productId}`]);
  }
}
