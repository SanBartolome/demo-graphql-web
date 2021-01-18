import { gql } from 'apollo-angular';

export const GET_PRODUCT_QUERY = gql`
  query($id: ID!) {
    producto(id: $id) {
      id
      nombre
      publicado
      precio
      precioDescuento
      esOferta
      descripcion
      palabrasClave
    }
  }
`;
