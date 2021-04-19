import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

const Header: React.FC = ({ cart }: any) => {
  return (
    <Styled.Container>
      <Link to="/">
        <h3>SHOES</h3>
      </Link>
      <Styled.Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cart.length} itens</span>
        </div>
        <MdShoppingBasket size={30} />
      </Styled.Cart>
    </Styled.Container>
  );
};

export default connect((state: any) => ({
  cart: state.cart
}))(Header);
