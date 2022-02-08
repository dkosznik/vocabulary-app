import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages components
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/create' element={<Create/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App
