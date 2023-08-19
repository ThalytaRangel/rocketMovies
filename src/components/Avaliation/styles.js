import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  align-items: center;
  justify-content: flex-start;  
  gap: 20px;  
  margin-top: 24px;

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;

export const Rating = styled.div`
  
  > svg {
    width: 20px;

    color: ${({theme}) => theme.COLORS.PINK};

  }
`;