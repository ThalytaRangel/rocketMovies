import { Container, Content, Author, Markers } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Avaliation } from "../../components/Avaliation";
import { Tag } from "../../components/Tag";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Preview() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm(
      "Você tem certeza que deseja deletar a nota?"
    );

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {data && (
          <main>
            <header>
              <ButtonText
                icon={FiArrowLeft}
                title="Voltar"
                onClick={handleBack}
              />
              <ButtonText
                icon={FiX}
                title="Excluir nota"
                onClick={handleRemove}
              />
            </header>
            <Avaliation title={data.title} rate={data.rating} />
            <Author>
              <img src={avatarURL} alt="Imagem do usuário" />
              <span>{`Por ${user.name}`}</span>
              <LuClock3 />
              <span>{data.updated_at}</span>
            </Author>

            {data.tags && (
              <Markers>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Markers>
            )}
            <p>{data.description} </p>
          </main>
        )}
      </Content>
    </Container>
  );
}
