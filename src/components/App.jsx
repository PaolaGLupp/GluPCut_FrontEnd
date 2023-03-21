import '../assets/App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import {AppWrapper} from '../context/context'
 import Home from './Home'
import Login from './Login'
import Register from './Register'
import Redirect from './Redirect';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <AppWrapper>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/register" element={<Register />} />}
          <Route path="/login" element={<Login />} />

          <Route path='/:id' element={<Redirect/>} />

        </Routes>
      </AppWrapper>


    </div>
  );
}

export default App;
