import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CreateProductBloc } from '../../blocs/create-product.bloc';
import { CREATE_PRODUCT_MUTATION } from '../../mutations/create-product.mutation';

@Component({
  selector: 'app-create-product-second-step',
  templateUrl: './create-product-second-step.component.html',
  styleUrls: ['./create-product-second-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductSecondStepComponent implements OnInit {
  productPrice: number;
  productDiscountedPrice: number;
  isOffer: boolean;

  constructor(
    public createProduct: CreateProductBloc,
    private router: Router,
    private apollo: Apollo
  ) {
    this.productPrice = this.createProduct.productInfo.value?.price;
    this.productDiscountedPrice = this.createProduct.productInfo.value?.discountedPrice;
    this.isOffer = this.createProduct.productInfo.value?.isOffer;
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.createProduct.setStep2Info({
      price: this.productPrice,
      discountedPrice: this.productDiscountedPrice,
      isOffer: this.isOffer,
    });
    if (confirm('¿Quiere que sea publicado?')) {
      this.handleCreateProduct(true);
    } else {
      this.handleCreateProduct(false);
    }
  }

  private handleCreateProduct(isPublished: boolean) {
    const newProduct = this.createProduct.productInfo.value;
    this.apollo
      .mutate({
        mutation: CREATE_PRODUCT_MUTATION,
        variables: {
          data: {
            nombre: newProduct.name,
            descripcion: newProduct.description,
            palabrasClave: newProduct.keywords,
            precio: newProduct.price,
            precioDescuento: newProduct.discountedPrice,
            esOferta: newProduct.isOffer,
            publicado: isPublished,
          },
        },
      })
      .subscribe();
    this.router.navigate(['/list-products']);
    this.createProduct.remove();
  }
}
