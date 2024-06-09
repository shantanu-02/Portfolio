import React from 'react'
<<<<<<< HEAD
import logo from '../../public/img/portfolio.png';
import search from '../../public/img/search.png';
=======
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1

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
<<<<<<< HEAD
          <img className="logo" src={logo} />
=======
          <img className="logo" src="../../public/img/portfolio.png" />
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1
          <ol className='list'>
            <li onClick={() => scrollToComponent('who')}>Intro</li>
            <li onClick={() => scrollToComponent('works')}>Works</li>
            <li onClick={() => scrollToComponent('contact')}>Contact</li>
          </ol>
        </div>
        <div className='icons'>
<<<<<<< HEAD
          <img src={search} className='search'/>
=======
          <img src='../../public/img/search.png' className='search'/>
>>>>>>> 6f10683890911f429deda2e2dfad776d9623e8c1
          <button className='button' onClick={() => scrollToComponent('contact')}>Hire now!</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar