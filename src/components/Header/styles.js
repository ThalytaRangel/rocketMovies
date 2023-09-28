import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.header`
  width: 100%;
  height: 116px;

  grid-area: header;
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;


  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};

  h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    font-weight: 700;
  }

  input {
    width: 630px;
    height: 56px;
    padding: 19px 24px;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }
`;

export const Profile = styled.div`
  display: flex;  
  align-items: center;
  
  gap: 9px;

  > Link img {
    width: 64px;
    height: 64px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;    
    

    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      align-self: end;
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;

  font-size: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  align-self: end;

`;

export const ImgLink = styled(Link)`
> img {
    width: 64px;
    height: 64px;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 50%;
  }
`