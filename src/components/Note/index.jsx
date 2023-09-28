import { Container } from "./styles";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <header>
        <h1>{data.title}</h1>
        <Stars rate={data.rating} />
      </header>
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
