import { Container, Rating } from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export function Avaliation({ title, rate }) {
  let stars = [];

  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= rate) {
      stars.push(<AiFillStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar key={cont} />);
    }
  }

  return (
    <Container>
      <h1>{title}</h1>
      <Rating>{stars}</Rating>
    </Container>
  );
}
