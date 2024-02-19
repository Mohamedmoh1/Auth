import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import ErrorAuth from './Components/ErrorAuth';

function App() {
  return (
    <div>
      <NavAuth/>
      <ErrorAuth/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>    
      </Routes>
    </div>
  );
}

export default App;
