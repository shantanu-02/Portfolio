import React from 'react'

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
          <img className="logo" src="../../public/img/portfolio.png" />
          <ol className='list'>
            <li onClick={() => scrollToComponent('who')}>Intro</li>
            <li onClick={() => scrollToComponent('works')}>Works</li>
            <li onClick={() => scrollToComponent('contact')}>Contact</li>
          </ol>
        </div>
        <div className='icons'>
          <img src='../../public/img/search.png' className='search'/>
          <button className='button' onClick={() => scrollToComponent('contact')}>Hire now!</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar