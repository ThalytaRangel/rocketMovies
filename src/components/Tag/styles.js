import styled from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`;