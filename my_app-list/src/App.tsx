import { useState } from 'react';
import * as C from './App.styles';
import { Item } from '../src/types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar uma cerveja no buteco.', done: false },
    { id: 2, name: 'Comprar uma ficha de fliperama.', done: true },
  ]);

  return(
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea />

          {list.map((item, index)=>(
            <ListItem key={index} item={item}/>
          ))}
        </C.Area>
      </C.Container>  
  );
}

export default App;