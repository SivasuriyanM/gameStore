import React from 'react';
import { games } from '../helpers/gameCon';
import Item from '../components/Item';
import { Pregames } from '../helpers/PregameCon'
import PreItem from '../components/PreItem';
import '../styles/details.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/cards';
import TitleCard from '../assets/main-img.png';


function Home() {

  return (
    <>  
    <NavBar/>
    <div className = 'title-card'>
      <img className = 'title-img' src = {TitleCard} alt = 'game-name'/>
    </div>
    <div className='menu'>
    <h1 className='menuTitle'>Top Free Games </h1>
    <div className='menuList'>{games.map((menuItem, key)=>{
        return (<Item key={key} image={menuItem.image} name={menuItem.name} detail={menuItem.detail} link={menuItem.link} gameData = {menuItem}/>);
    })}
    </div >
    </div>
    <div className = 'card-container'>
    <h1 className='title-card-header'>Top 10 Games </h1>
    <Card/>
    </div>
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