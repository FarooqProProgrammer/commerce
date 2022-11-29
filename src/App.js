import './App.css';
import Display from './screens/Display';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './screens/Add';
import delete from './screens/delete';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Display/>}/>
          <Route path='/Add' element={<Add/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
