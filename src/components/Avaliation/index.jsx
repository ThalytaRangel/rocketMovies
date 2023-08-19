import {Container, Rating} from './styles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'; 

export function Avaliation({title}) {
  return (
    <Container>
      <h1>{title}</h1>
      <Rating>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
      </Rating>
    </Container>
  )
}