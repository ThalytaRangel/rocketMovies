import styled from 'styled-components';


export const Container = styled.button`
  background: none;
  border: none;
  
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