import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Home2 from './components/Home2';
import './App.css';

const App=()=>(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm/>}/>
        <Route  exact path="/home" element={<Home/>}/>
        <Route  exact path="/home2" element={<Home2/>}/>
      </Routes>
  
  
    </BrowserRouter>


)

  
  
export default App;
