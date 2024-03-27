import React from 'react'

const Card = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none', color: 'white' }}>
    <div className='card'>
      <div className='image'>
        <img src={props.img} className='cardImage'/>
      </div>
        <h1 className="cardTitle">{props.title}</h1>
        <p className="cardInfo">{props.info}</p>
    </div>
    </a>
  )
}

export default Card