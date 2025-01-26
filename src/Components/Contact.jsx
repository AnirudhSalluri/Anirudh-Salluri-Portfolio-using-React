import React from 'react'
import './Contact.css'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tfeh1fc', 'template_a7eic2s', form.current, {
        publicKey: '0jCUOk5Q72nkOPPg9',
      })
      .then(
        () => {
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Message not sent , There is an issue");
        },
      );
  };

  return (
    <div className='Contact' id='contact'>

        <h1 className='title'>Contact Me</h1>
        <p className='para'>Please fill the form below to discuss any work Opportunities</p>
        <form ref={form} className='form' onSubmit={sendEmail}>
            <input name='from_name' type='text' placeholder='Your Name' className='textinput'/>
            <input name='user_email' type='text' placeholder='Your Email' className='textinput'/>
            <textarea name='message'  placeholder='Your Message' className='textarea'/>
            <button type='submit' className='submitbtn'>Submit</button>
        </form>

        <div className="socialmedia">
           <a href='https://www.youtube.com/@lookmyshownaviani1326'> <img src={youtube} alt='youtube' /></a>
           <a href='https://www.facebook.com'><img src={facebook} alt='facebook' /></a>
           <a href='https://www.instagram.com/anirudhsalluri'><img src={instagram} alt='instagram' /></a>
           <a href='https://www.linkedin.com/in/anirudh-salluri-b13317246'><img src={linkedin} alt='linkedin' /></a>
           <a href='https://x.com/?lang=en&mx=2'><img src={twitter} alt='twitter' /></a>
        </div>


    </div>
  )
}

export default Contact