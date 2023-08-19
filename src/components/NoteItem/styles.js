import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 10px;
  padding: 16px;
  gap: 16px;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.PINK};

  border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none'};  

  > button {
    width: 22px;
    height: 22px;
    border: none;
    background: none;

    svg {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > input {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};

    &placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }

`;