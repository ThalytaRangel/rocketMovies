import { Container } from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export function Stars({ rate }) {
  let stars = [];

  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= rate) {
      stars.push(<AiFillStar key={cont} />);
    } else {
      stars.push(<AiOutlineStar key={cont} />);
    }
  }
  return <Container>{stars}</Container>;
}
