import { Container, Avatar, Form } from './styles';
import {ButtonText} from '../../components/ButtonText';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {FiArrowLeft,FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';


export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar"/>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/thalytarangel.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id='avatar' 
            type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="Email" type="text" icon={FiMail}/>
        <Input placeholder="Senha Atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova senha" type="password" icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
    </Container>
  );
}