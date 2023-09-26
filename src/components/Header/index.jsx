import { Container, Input, Profile, Logout, ImgLink } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    signOut();
    navigate("/");
  }
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>
        <ImgLink to="/profile">
          <img src={avatarURL} alt={`Foto da ${user.name}`} />
        </ImgLink>
      </Profile>
    </Container>
  );
}
