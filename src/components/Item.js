import React from 'react'

function Item({name,image,detail,link}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{detail}</p>
        <h3>{link}</h3>
    </div>
  )
}

export default Item