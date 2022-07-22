import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const[done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_je9jo3a', 'template_i1irjuf', form.current, 'RX47MvDNAg1gh3Dcv')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
        <div className="w-form">
            <div className="awesome1">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div
                className='blur s-blurl'
                style={{background:'#ABF1FF94'}}
                ></div>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='Send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div blur c-blurl
                style={{background:'#ABF1FF94'}}
                ></div>
            </form>
        </div>

    </div>
  )
}

export default Contact