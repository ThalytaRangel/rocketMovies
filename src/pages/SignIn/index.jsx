import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import {FiLock, FiMail} from 'react-icons/fi';



export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Email" type="text" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>

        <Button title="Entrar"/>

        <ButtonText to="/register" title="Criar conta"/>
      </Form>
      <Background/>
    </Container>
  );
}