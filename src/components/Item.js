import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Def from './Def';
import { games } from '../helpers/gameCon'

// function Item({name,image,detail,link}) {
function Item(props) {
  const[gamePreview,setGamePreview] = useState(false);
  const[previewStatus,setpreviewStatus] = useState(false);
  const navigate = useNavigate();
  

  const onViewDetails = (e) => {
    
  }
  const onDownload = (e) => {

  }
  const onDlgClose = () => {
    setGamePreview(false);
    setpreviewStatus(false);
  }
  

  return (
    <>
     <div className='menuItem'>
        <div style={{backgroundImage:`url(${props.image})`}}></div>
        <h1>{props.name}</h1>
        {/* <p>{detail}</p> */}
        {/* <h3>{link}</h3> */}
        <Def details = {props.gameData}/>
        <button  onClick={(e) => {onDownload(e)}}>Download</button>
        
    </div>

      {/* {
          gamePreview && 
          <Details
        details = {props.gameData}
        previewEnable  = {previewStatus}
        onDlgClose = {onDlgClose}
      />
        } */}
    </>
   
  )
}

export default Item