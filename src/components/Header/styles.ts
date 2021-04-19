import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  margin-bottom: 30px;
`;
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  strong {
    display: block;
  }
`;
