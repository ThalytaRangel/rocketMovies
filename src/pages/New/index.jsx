import { Container, Form, Markers, Button } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { ButtonText } from '../../components/ButtonText';
import {FiArrowLeft} from 'react-icons/fi';

export function New() {
  return (
    <Container>
      <Header/>
      <main>
       <Form> 
         <header> 
           <ButtonText id="return" to="/" icon={FiArrowLeft} title="Voltar" />        
           <h1>Novo filme</h1>
         </header>
         <div className='info'>
           <Input placeholder="Título"/>
           <Input placeholder="Sua nota (de 0 a 5)"/>          
         </div> 
         <TextArea placeholder="Observações"/>  

         <Markers>
           <h3>Marcadores</h3>
           <div className='tags'>
            <NoteItem value="Drama" />
            <NoteItem value="Familia" />
            <NoteItem isNew placeholder="Nova tag" />            
           </div>
         </Markers>
         <div className='buttons'>
          <button className='btn-delete'>Excluir filme</button>
          <Button>Salvar alterações</Button>          
         </div> 
        </Form>
      </main>
    </Container>
  );
}