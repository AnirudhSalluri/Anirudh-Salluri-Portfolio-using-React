import React from 'react'
import './Intro.css'
import bg from '../assets/Profile.png';
import {Link} from 'react-scroll'
import { FaSuitcase } from "react-icons/fa6";

const Intro = () => {
  return (
    <section className='Intro' id='intro'>
        <div className='introcontent'>
        <span className='hello'>Hello</span><br/>
        <span className='Iam'>I'm </span>
        <span className='AS'>Anirudh Salluri</span><br/>
        <p className='text'>An eager software professional, ready to bring my skills and passion to the next opportunity </p>
        <a href='https://www.linkedin.com/in/anirudh-salluri-b13317246'>
            <button className='btn'>
            <FaSuitcase className='icon'/>Hire me
            </button>
        </a>
        </div>
        <img src={bg} alt='Image' className='image'/>

    </section>
  )
}

export default Intro