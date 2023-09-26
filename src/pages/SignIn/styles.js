import styled from 'styled-components';
import backgroundImg from '../../assets/bg-img.png'


export const Container =  styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  justify-items: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;    
    color: ${({theme}) => theme.COLORS.PINK};    
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.LIGHT_TXT};
    margin-bottom: 48px;
  }

  > h2 {
    font-weight: 500;
    margin-bottom: 48px;
  }

  > #login {
    margin-top: 24px;
    margin-bottom: 42px;
    width: 100%;
    text-align: center;
  } 
`;

export const Background = styled.div`
  flex: 1;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`