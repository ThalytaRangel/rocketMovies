import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 8px;

  

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  > input {
    height: 56px;
    width: 100%;
    padding: 16px;

    background: transparent;
    color:  ${({theme}) => theme.COLORS.WHITE};
    border: 0;
    
    &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
      }    
  }

  > svg {
    margin-left: 16px;
  }


`;