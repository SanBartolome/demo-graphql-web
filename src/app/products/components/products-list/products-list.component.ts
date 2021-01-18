import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EditProductBloc } from '../../blocs/edit-product.bloc';
import { ProductModel } from '../../models/product.model';
import { DELETE_PRODUCT_MUTATION } from '../../mutations/delete-product.mutation';
import { UPDATE_PRODUCT_MUTATION } from '../../mutations/update-product.mutation';
import { GET_PRODUCT_QUERY } from '../../queries/get-product.query';
import { GET_PRODUCTS_QUERY } from '../../queries/get-products.query';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  productsResult$: Observable<ApolloQueryResult<{ productos: ProductModel[] }>>;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private editProduct: EditProductBloc
  ) {
    this.productsResult$ = this.apollo
      .watchQuery<{ productos: ProductModel[] }>({
        query: GET_PRODUCTS_QUERY,
      })
      .valueChanges.pipe();
  }

  ngOnInit(): void {}

  handlePublishedClick(productId: string, published: boolean) {
    this.apollo
      .mutate({
        mutation: UPDATE_PRODUCT_MUTATION,
        variables: {
          id: productId,
          data: {
            publicado: published,
          },
        },
      })
      .subscribe();
  }

  handleOfferClick(productId: string, isOffer: boolean) {
    this.apollo
      .mutate({
        mutation: UPDATE_PRODUCT_MUTATION,
        variables: {
          id: productId,
          data: {
            esOferta: isOffer,
          },
        },
      })
      .subscribe();
  }

  handleDelete(productId: string) {
    if (confirm('¿Seguro que quiere eliminar el producto?')) {
      this.apollo
        .mutate({
          mutation: DELETE_PRODUCT_MUTATION,
          variables: {
            id: productId,
          },
          refetchQueries: [
            {
              query: GET_PRODUCTS_QUERY,
            },
          ],
        })
        .subscribe();
    }
  }

  handleGoToEdit(productId: string) {
    this.apollo
      .query<{ producto: ProductModel }>({
        query: GET_PRODUCT_QUERY,
        variables: { id: productId },
      })
      .pipe(
        tap(({ data: { producto } }) => {
          const keywords = JSON.stringify(producto.palabrasClave);
          this.editProduct.setInfo({
            name: producto.nombre,
            description: producto.descripcion,
            keywords: keywords.substr(1, keywords.length - 2),
            price: producto.precio,
            discountedPrice: producto.precioDescuento,
            isOffer: producto.esOferta,
          });
          this.router.navigateByUrl(`/edit-product-first-step/${productId}`);
        })
      )
      .subscribe();
  }
}
