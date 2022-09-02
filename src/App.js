import './App.css';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config"
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  //localstorage para salvar isAuth pq quando atualizava a página 
  //tinha que fazer login novamente
 
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/"> Home</Link>
        
        {!isAuth ? <Link to="/login"> login</Link> :
        <>
        <Link to="/createpost"> create Post</Link>
        <button onClick={signOutUser}>Log Out</button>
        </>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
