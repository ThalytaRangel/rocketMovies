import { Container, Input, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
     <h1>RocketMovies</h1>
     <Input placeholder='Pesquisar pelo título'/>  
     <Profile to="/profile">      
      <div>      
      <strong>Thalyta Rangel</strong>
      <Logout>sair</Logout>      
      </div>
      <img src="https://github.com/thalytarangel.png" alt="Imagem do usuário" />
     </Profile>      
   </Container>
  )
}