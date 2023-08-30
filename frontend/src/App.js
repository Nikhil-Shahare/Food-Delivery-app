
import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
      <BrowserRouter>

    <div >
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/login' element={<Login />}/>
      
      </Routes>
    </div>
      </BrowserRouter>
  
  );
}

export default App;
