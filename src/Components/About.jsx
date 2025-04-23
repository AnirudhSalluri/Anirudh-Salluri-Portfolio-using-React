import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About' id='about'>
        <h1 className='heading'>ABOUT</h1>
        <div className="frontend">
            <h2 className='secondheading'>FrontEnd</h2>
            <p className='paragraph'>I am a FrontEnd Developer<br/>
             My first project is this portfolio <br/>
            I made this using React 
                 </p>
        </div>
        <div className="BackEnd">
            <h2 className='secondheading'>BackEnd</h2>
            <p className='paragraph'>I am a BackEnd Developer<br/>
             I am aware of Node <br/> I am also working with Java <br/>
                 </p>
        </div>
        <div className="MachineLearning">
            <h2 className='secondheading'>Machine Learning</h2>
            <p className='paragraph'>I made a Project using Deep Learning<br/>
             I did it in my College  <br/>
             I made it with help three team members
                 </p>
        </div>
    </div>
  )
}

export default About