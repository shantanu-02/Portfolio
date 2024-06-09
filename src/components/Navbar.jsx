import React from 'react'
import logo from '../../public/img/portfolio.png';
import search from '../../public/img/search.png';

const Navbar = () => {
  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='links'>
          <img className="logo" src={logo} />
          <ol className='list'>
            <li onClick={() => scrollToComponent('who')}>Intro</li>
            <li onClick={() => scrollToComponent('works')}>Works</li>
            <li onClick={() => scrollToComponent('contact')}>Contact</li>
          </ol>
        </div>
        <div className='icons'>
          <img src={search} className='search'/>
          <button className='button' onClick={() => scrollToComponent('contact')}>Hire now!</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar