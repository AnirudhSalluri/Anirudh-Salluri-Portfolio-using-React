import React, { useState } from 'react';
import icon from '../assets/icon.png';
import './Navbar.css';
import {Link} from 'react-scroll';
import { IoMdContact } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const[isOpen,setisOpen]=useState(true);

  return (
    <div className='Navbar'>
            <div className='icon'>
                <img src={icon} alt="Icon" />
            </div>
            <div className='menubtn' onClick={()=>setisOpen(!isOpen)}>{isOpen?<FiMenu/>:<IoClose/>}</div>
            <div className={`btns ${isOpen && 'openmenu'}`} > 
                <Link activeClass='active' to='intro' spy={true} smooth={true}  duration={700} offset={-100} className='links' >Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}  duration={700} offset={-100} className='links' id='About'>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true}  duration={700} offset={-100} className='links'>Projects</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true}  duration={700} offset={-100} className='links' id='Skills'>Skills</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true}  duration={700} offset={-100} className='linkscon' >Contact</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true}  duration={700} offset={-100}  className="contact">
            <IoMdContact size={25} /> Contact
            </Link>
    </div>
  )
}

export default Navbar