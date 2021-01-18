import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { EditProductBloc } from '../../blocs/edit-product.bloc';
import { UPDATE_PRODUCT_MUTATION } from '../../mutations/update-product.mutation';

@Component({
  selector: 'app-edit-product-second-step',
  templateUrl: './edit-product-second-step.component.html',
  styleUrls: ['./edit-product-second-step.component.scss'],
})
export class EditProductSecondStepComponent implements OnInit {
  productPrice: number;
  productDiscountedPrice: number;
  isOffer: boolean;
  productId: string;

  constructor(
    public editProduct: EditProductBloc,
    private router: Router,
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.productPrice = this.editProduct.productInfo.value?.price;
    this.productDiscountedPrice = this.editProduct.productInfo.value?.discountedPrice;
    this.isOffer = this.editProduct.productInfo.value?.isOffer;
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.editProduct.setStep2Info({
      price: this.productPrice,
      discountedPrice: this.productDiscountedPrice,
      isOffer: this.isOffer,
    });
    this.handleCreateProduct();
  }

  private handleCreateProduct() {
    const newProduct = this.editProduct.productInfo.value;
    this.apollo
      .mutate({
        mutation: UPDATE_PRODUCT_MUTATION,
        variables: {
          id: this.productId,
          data: {
            nombre: newProduct.name,
            descripcion: newProduct.description,
            palabrasClave: newProduct.keywords,
            precio: newProduct.price,
            precioDescuento: newProduct.discountedPrice,
            esOferta: newProduct.isOffer,
          },
        },
      })
      .subscribe();
    this.router.navigate(['/list-products']);
    this.editProduct.remove();
  }
}
