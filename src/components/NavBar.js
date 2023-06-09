import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Reorder from '@mui/icons-material/ViewList';
import logo from '../assets/logo.png';

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false); 

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks?"open":"close"} >
            <img src = {logo} alt='logo'/>
            <span className = 'app-name'>CS Games</span>
            <div className='hiddenLinks'>
           
            <Link to="/">LOG OUT</Link>
            </div>
        </div>
        <div className='rightSide'>
            
            <Link to="/">LOG OUT</Link>
            <button onClick={toggleNavbar }>
            <Reorder/>
            </button>
        </div>
    </div>
  )
}

export default NavBar