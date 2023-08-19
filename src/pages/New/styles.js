import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: "content";
    width: 1024px;
    margin: 40px auto 85px;
    padding: 0 24px 16px 0;

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

  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  > header { 
    display: flex;
    flex-direction: column;
    
    > #return {
      align-self: start;
    }   
    
       
    h1 {
      margin-top: 24px;
      font-size: 36px;
      font-weight: 500;
    } 
  }

  > .info {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  > .buttons {
    display: flex;
    width: 100%;
    align-items: center;
    

    gap: 40px;

    > .btn-delete {
      width: 100%;
      height:56px;

      border: none;
      border-radius: 8px;
      background-color: ${({theme}) => theme.COLORS.BLACK};

      color: ${({theme}) => theme.COLORS.PINK};
      font-weight: 500;  
    }

    > .btn-delete:hover {
      filter: brightness(0.7);
    }
  }  
`;

export const Markers = styled.div`

  > h3 {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 20px;
  font-weight: 500;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    width: 100%;
    padding: 16px;
    border-radius: 8px;
    margin-top: 24px;

    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
    justify-content: start;       
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 16px auto;

  border: none;
  border-radius: 10px;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_700} ;
  font-weight: 500;

  
`;