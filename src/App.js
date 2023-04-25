import './App.css';
// import { useContext } from 'react';
// import {CounterContext} from './context/CounterContext';
import ChangeCounter from './components/ChangeCounter';

//-4 refatorando com hook
import { useCounterContext } from './hooks/useCounterContext';


//-5 context mais complexo
import { useTitleColorContext } from './hooks/useTitleColorContext';

function App() {

  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color, dispatch} = useTitleColorContext()

//6- alterando state mais complexo

const setTitleColor = (color) => {
  dispatch({type: color})
}
  return (
    <div className="App">
      <h2 style={{color: color}}>Home</h2>
      <p>Valor do contador {counter}</p>
      <ChangeCounter/>

      {/* // 6- alterando contexto complexod */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
}

export default App;
