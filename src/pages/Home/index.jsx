import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { Container, Head, Notes } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleOpenNote(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);
  return (
    <Container>
      <Header>
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <Head>
          <h1>Meus filmes</h1>
          <Button to="/new" title="Adicionar filme" icon={AiOutlinePlus} />
        </Head>
        <Notes>
          {notes &&
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleOpenNote(note.id)}
              />
            ))}
        </Notes>
      </main>
    </Container>
  );
}
