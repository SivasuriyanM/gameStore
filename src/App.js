import React from 'react';
import './components/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Authenticate from './pages/Authenticate';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  exact element={<Authenticate/>} />
          <Route path="/home" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App