import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';


//pages components
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Lesson from './pages/lesson/Lesson';

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
    { authIsReady && (
      <BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
        <Navbar />
        <Routes>
            <Route path='/' element={user ? <Dashboard/> : <Navigate to ='/login'/>}></Route>
            <Route path='/create' element={user ? <Create/> : <Navigate to ='/login'/>}></Route>
            <Route path='/lessons/:id' element={user ? <Lesson/> : <Navigate to ='/login'/>}></Route>
            <Route path='/login' element={!user ? <Login/> : <Navigate to ='/'/>}></Route>
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to ='/'/>}></Route>
          </Routes>
        </div>
        </BrowserRouter>
    )}
    </div>
  );
}

export default App
