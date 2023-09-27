import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='links'>
          <img className="logo" src="../../public/img/mylogo.jpg" />
          <ol className='list'>
            <li>home</li>
            <li>works</li>
            <li>contact</li>
          </ol>
        </div>
        <div className='icons'>
          <img src='../../public/img/search.png' className='search'/>
          <button className='button'>Hire now!</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar