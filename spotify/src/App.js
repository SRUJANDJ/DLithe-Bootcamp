import Home from './Components/Home'
import Login from './Components/Login'
import UserHomePage from './Components/UserHomePage';
import Signup from './Components/Signup';
import Songs from './Components/Songs'

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/UserHome' element={<UserHomePage/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Songs' element={<Songs/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
