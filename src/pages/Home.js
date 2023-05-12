import React from 'react';
import { games } from '../helpers/gameCon';
import Item from '../components/Item';
import '../styles/details.css'


function Home() {
  return (
    <div className='menu'>
    <h1 className='menuTitle'>GAMES</h1>
    <div className='menuList'>{games.map((menuItem, key)=>{
        return (<Item key={key} image={menuItem.image} name={menuItem.name} detail={menuItem.detail} link={menuItem.link}/>);
    })}</div>
    </div>
  )
}

export default Home