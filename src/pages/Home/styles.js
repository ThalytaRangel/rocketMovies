import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";


  
  > main { 
    grid-area: content ;
    display: flex;
    flex-direction: column;

    max-width: 1137px;
    height: 100%;
    
   
    gap: 37px;
    margin: 0 auto;
    padding: 50px 0;
  }
  
`;


export const Head = styled.div`
   display: flex;  
   align-items: center;
   justify-content: space-between;
   
`;

export const Notes = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;
 max-height: 480px;
 padding-right: 20px;

 overflow-y: auto;

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


`;