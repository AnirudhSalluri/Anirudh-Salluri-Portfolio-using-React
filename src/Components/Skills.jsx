import React from 'react'
import './Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import pyhton from '../assets/pyhton.jpg'
import java from '../assets/java.png'
import c from '../assets/c prog.png'
import mysql from '../assets/mysql.png'
import react from '../assets/react.png'
import vscode from '../assets/vscode.jpg'

const Skills = () => {
  return (
    <div className='Main' id='skills'>
        <h1>Skills</h1>
<div className="skills-container">
        <div className="skill">
            <img src={html} alt='HTML' />
            <p>HTML</p>
        </div>
        <div className="skill">
            <img src={css} alt='CSS' />
            <p>CSS</p>
        </div>
        <div className="skill">
            <img src={js} alt='JavaScript' />
            <p>JavaScript</p>
        </div>
        <div className="skill">
            <img src={pyhton} alt='Pyhton' />
            <p>Python</p>
        </div>
        <div className="skill">
            <img src={java} alt='Java' />
            <p>Java</p>
        </div>
        <div className="skill">
            <img src={c} alt='C Progamming' />
            <p>C Pogramming</p>
        </div>
        <div className="skill">
            <img src={mysql} alt='MySql' />
            <p>MySQL</p>
        </div>
        <div className="skill">
            <img src={react} alt='React' />
            <p>React JS</p>
        </div>
        <div className="skill">
            <img src={vscode} alt='VSCode' />
            <p>VS Code</p>
        </div>
        </div>
    </div>
  )
}

export default Skills