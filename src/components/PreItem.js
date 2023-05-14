import React from 'react'
import Dialog from './Dialog';
import './style.css';
function PreItem(props) {
  return (
    <>
     <div className='menuItem'>
        <div style={{backgroundImage:`url(${props.image})`}}></div>
        <h3 style = {{position: "relative",color: "black",opacity: "65%"}}>{props.name}</h3>
        {/* <span>{props.link}</span> */}
        <Dialog details = {props.gameData}/>
    </div>
    </>
  )
}

export default PreItem