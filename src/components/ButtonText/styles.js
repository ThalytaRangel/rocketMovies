import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link) `
  background: none;
  
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: 8px;

  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 16px;

  > svg {
    font-size: 16px;
  }
`;