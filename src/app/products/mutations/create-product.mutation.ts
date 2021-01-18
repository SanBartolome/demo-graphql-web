import { gql } from 'apollo-angular';

export const CREATE_PRODUCT_MUTATION = gql`
  mutation($data: ProductoInput) {
    createProducto(input: { data: $data }) {
      producto {
        id
        nombre
        publicado
        precio
        precioDescuento
        esOferta
      }
    }
  }
`;
