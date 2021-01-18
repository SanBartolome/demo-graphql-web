import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ProductInfo = {
  name?: string;
  description?: string;
  keywords?: string;
  price?: number;
  discountedPrice?: number;
  isOffer?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class CreateProductBloc {
  productInfo = new BehaviorSubject<ProductInfo>(null);

  constructor() {
    this.restore();
  }

  setStep1Info(info: ProductInfo) {
    this.productInfo.next({
      ...this.productInfo.value,
      name: info.name,
      description: info.description,
      keywords: info.keywords,
    });
    this.persist();
  }

  setStep2Info(info: ProductInfo) {
    this.productInfo.next({
      ...this.productInfo.value,
      price: info.price,
      discountedPrice: info.discountedPrice,
      isOffer: info.isOffer,
    });
    this.persist();
  }

  private persist() {
    localStorage.setItem(
      'create-product-info',
      JSON.stringify(this.productInfo.value)
    );
  }

  private restore() {
    this.productInfo.next(
      JSON.parse(localStorage.getItem('create-product-info'))
    );
  }

  remove() {
    localStorage.removeItem('create-product-info');
  }
}
