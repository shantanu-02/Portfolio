import React from 'react';
import wechatImage from '../../public/img/wechat.png';
import drawingToolImage from '../../public/img/Drawing-tool.png';
import dashboardImage from '../../public/img/dashboard.png';

const Card = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link" style={{ textDecoration: 'none', color: 'white' }}>
      <div className='card'>
        <div className='image'>
          <img src={`${props.img}`} className='cardImage' alt={props.title} />
        </div>
        <h1 className="cardTitle">{props.title}</h1>
        <p className="cardInfo">{props.info}</p>
      </div>
    </a>
  );
}

export default Card;
