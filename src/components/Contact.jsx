import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import EarthCanvas from './Earth';

const Contact = () => {

  const ref = useRef()

  const [success, setSuccess] = useState(null)
  

  const handleSubmit = e => {
    e.preventDefault()

    emailjs.sendForm('service_r438jnl', 'template_4zzfi9n', ref.current, 'LmtJnQ0mtpw1wiwAF')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  }

  return (
    <div className='contact' id="contact">
      <div className='contactContainer'>
        <div className='left'>
          <form className='contactForm' ref={ref} onSubmit={handleSubmit}>
          <div className='module'>     
            <p className='topic'>Get in touch</p>
            <h1 className='h1'>Contact.</h1>
          </div>
            <input className='name' type='text' placeholder='Enter your name' required name='name'></input>
            <input className='email' type='email' placeholder='Enter your email' required name='email'></input>
            <input className='message' type='text' placeholder='Write your message' required name='message'></input>
            <button className='send' type='submit'>Send</button>
            {success==true &&
             "Your email has been sent succesfully. I'll get back to you shortly :)"}
          </form>
        </div>
        <div className='right'>
            <EarthCanvas className="earth"/>
        </div>
      </div>
    </div>
  )
}

export default Contact