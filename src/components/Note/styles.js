import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-height: 220px ;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-radius: 16px;
  padding: 32px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  > p {
    max-height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px;
    text-align: justify;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.GRAY_100};   
  }
`;