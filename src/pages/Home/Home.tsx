import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from 'services/api';
import { formatPrice } from 'utils/format';
import { connect } from 'react-redux';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Home: React.FC = (props: any) => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product: Product) => {
    const { dispatch } = props;
    dispatch({
      type: 'ADD_TO_CART',
      product
    });
  };

  useEffect(() => {
    async function getProducts() {
      const response: any = await api.get('products');
      const data = response.data.map((product: Product) => ({
        ...product,
        price: formatPrice(product.price)
      }));
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <Styled.ProductList>
      {products.map((product: Product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart /> 3
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </Styled.ProductList>
  );
};

export default connect()(Home);
