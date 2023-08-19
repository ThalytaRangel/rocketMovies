import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const Content = styled.div`
  grid-area: "content";
  padding-top: 20px;
  
  
  
  main {
    margin: 40px auto ;
    max-width: 1200px;
    max-height: 450px ;
    padding-right: 24px;
    overflow-y: auto;    

     p {
      align-items: flex-start;
      text-align: justify;      
     }

    &::-webkit-scrollbar {
    background: none;
    width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;       
    }

    &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;       
  }
  }  
  
`;

export const Author= styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 24px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  }

  > svg {
    color:  ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Markers= styled.div`
  margin: 40px auto;
`;