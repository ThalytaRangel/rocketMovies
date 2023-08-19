import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  padding: 32px;
  
  border-radius: 8px;
  height: 48px;

  font-weight: 500;
  
  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`;