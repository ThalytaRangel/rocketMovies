import { Container, Form, Markers, Button } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Você precisa adicionar um título");
    }

    if (!rating) {
      return alert("Você precisa adicionar uma nota para o filme");
    }

    if (newTag) {
      return alert("Você precisa adicionar a Tag ou deixar o campo vazio");
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags,
    });
    alert("Nota cadastrada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText id="return" to="/" icon={FiArrowLeft} title="Voltar" />
            <h1>Novo filme</h1>
          </header>
          <div className="info">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Markers>
            <h3>Marcadores</h3>
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Markers>
          <div className="buttons">
            <button className="btn-delete">Excluir filme</button>
            <Button onClick={handleNewNote}>Salvar alterações</Button>
          </div>
        </Form>
      </main>
    </Container>
  );
}
