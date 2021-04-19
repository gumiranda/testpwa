import React from 'react';
import * as Styled from './styles';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
const Cart: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>~~imagem~~</span>
            </td>
            <td>
              <strong>Tenis bacana</strong>
              <span>R$12,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </Styled.ProductTable>
      <footer>
        <button type="button">Finalinar pedido</button>
        <Styled.Total>
          <span>TOTAL</span>
          <strong>R$98989,00</strong>
        </Styled.Total>
      </footer>
    </Styled.Container>
  );
};

export default Cart;
