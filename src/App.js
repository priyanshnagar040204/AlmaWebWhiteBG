
import './App.css';
import { Route,Routes} from "react-router-dom"
import Home from './page/Home';
import Form from './page/Form/Form'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='form' element={<Form/>}/>
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
