import React,{useState} from 'react';
import { games } from '../helpers/gameCon';
import Item from '../components/Item';
import { Pregames } from '../helpers/PregameCon'
import PreItem from '../components/PreItem';
import '../styles/details.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Reorder from '@mui/icons-material/ViewList';
import Card from '../components/cards';
import LogoTitle from '../components/logoCard/logoTitle';


function Home() {
  const [openLinks, setOpenLinks] = useState(false); 

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }
  return (
    <>
    <NavBar/>
    {/* <div classname = 'logo-title'>
    <LogoTitle/>
    </div> */}
    <div className='menu'>
    <h1 className='menuTitle'>Top Free Games </h1>
    <div className='menuList'>{games.map((menuItem, key)=>{
        return (<Item key={key} image={menuItem.image} name={menuItem.name} detail={menuItem.detail} link={menuItem.link} gameData = {menuItem}/>);
    })}
    </div >
    </div>
      <Card/>
    <div className='menu' >
    <h1 className='menuTitle'>Top Paid Games </h1>
    <div className='menuList'>{Pregames.map((menuItem, key)=>{
        return (<PreItem key={key} image={menuItem.image} name={menuItem.name} detail={menuItem.detail} link={menuItem.link} gameData = {menuItem}/>);
    })}
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home