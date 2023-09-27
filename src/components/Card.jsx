import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='image'>
        <img src={props.img} className='cardImage'/>
      </div>
        <h1 className="cardTitle">{props.title}</h1>
        <p className="cardInfo">{props.info}</p>
    </div>
  )
}

export default Card