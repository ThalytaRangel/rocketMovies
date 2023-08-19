import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
 
  
  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;
    padding: 0 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  }  
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  div:nth-child(4) {
    margin-top: 24px;
  }

  > Button {
    width: 100%;
    margin-top: 24px;
  }  
`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  position: relative;

  margin: -124px auto 64px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;    
  }
  
  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.PINK};

    position: absolute;
    right: 10px;
    bottom: 10px;

    cursor: pointer;

     input { 
      display: none;
     }

     svg {
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_700};
     }

  }



`;

