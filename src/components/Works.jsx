import React from 'react'
import Card from './Card'
import { Tilt } from 'react-tilt'


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



const projects = [{
  image: ".././public/img/wechat.png",
  title: "WeChat",
  description: "Wechat is a versatile and user-friendly messaging web-app designed to bring people closer, whether for personal conversations or staying in touch with loved ones. With a commitment to user privacy and security, Wechat is a platform for communication."
},
  {
  image: ".././public/img/dashboard.png",
  title: "Admin dashboard",
  description: "The Admin Dashboard displays tabs for multiple pages that provides data correctness and required administrative actions. These pages contain the results of detailed analyses, represented  images, graphs and pie charts."
},{
  image: ".././public/img/e-commerce.png",
  title: "E-commerce app",
  description: "An ecommerce app UI that allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides UI for payment processing, shipping, and order management capabilities"
}]

const Works = () => {

  
  const cards = projects.map(project => {
    return (
    <Tilt options={defaultOptions} style={{ height: 250, width: 340 }}>
    <Card
      key = {project.title}
      img = {project.image}
      title = {project.title}
      info = {project.description}
    />
    </Tilt>
  )})

  return (
    <div className='works'>
      <div className='top'>
        <p className='topic'>My work</p>
        <h1 className='h1'>Projects.</h1>
          <div className='do'>
            <p className='lineText'>What I have been doing so far.</p>
            <p className='lineTexts'>Following projects showcases my skills through real-world examples of my work. It reflects my abilities of front-end development, working with different technologies and manage projects effectively. </p>
          </div>
      </div>
        <section className='cardList'>
           {cards}
        </section>
    </div>
  )
}

export default Works

