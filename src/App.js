import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App