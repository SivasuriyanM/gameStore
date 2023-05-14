import React,{useState} from 'react';
import './components/style.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Authenticate from './pages/Authenticate';
// import Scroll from './components/logoCard/scroll';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signIn"  exact element={<Authenticate/>} />
          <Route path="/home" exact element={<Home/>} />
          {/* <Route path="/img" exact element={<ImgCrsl/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App