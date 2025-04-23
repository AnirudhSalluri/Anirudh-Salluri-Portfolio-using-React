import React, { useEffect, useState } from 'react'
import project1 from '../assets/image.png'
import project2 from '../assets/website.png'
import './Project.css';

const ProjectSec = () => {

  const[slide,setslide]=useState(false);
  const[leftslide,setleftslide]=useState(false)
  const GrAction=()=>{
  setleftslide(true)
  setslide(false)
  };
  const HrAction=()=>{
   setslide(true)
   setleftslide(false)
  };
  
  return (
    <div className='ProjectSec' id='projects'>

      <h1 className='heading'>PROJECTS</h1>

    <div className='main'>
        <div className={` Project ${slide && 'slider1'} ${leftslide && 'slider2'} `}>
          <h2 className='Title'>Non Helmet Rider Detection Using Deep Learning</h2>
          <img src={project1} alt='Image' className='projectimage'/>
          <ul className='ull'>
          <li className='Skillset'>Python</li>
          <li className='Skillset'>MySql</li>
          <li className='Skillset'>Deep Learning</li>
          <li className='Skillset'>YOLO Algorithm</li>
          <li className='Skillset'>OCR Algorithm</li>
          </ul>
        </div>

        <div className={` Project ${slide && 'slider1'} ${leftslide && 'slider2'}`}>
          <h2 className='Title'>Portfolio Website Using ReactJS</h2>
          <img src={project2} alt='Image' className='projectimage'/>
          <ul className='ull'>
          <li className='Skillset'>React</li>
          <li className='Skillset'>CSS</li>
          <li className='Skillset'>Java Script</li>
          <li className='Skillset'>HTML</li>
          <li className='Skillset'>VS Code</li>
          </ul>
        </div>
        </div>

      <div className='pages'>  <button className='prev' onClick={GrAction}>1</button>
        <button className='next' onClick={HrAction}>2</button>
      </div>
    </div>
  )
}

export default ProjectSec