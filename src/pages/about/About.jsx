import React from 'react';
import { ReactComponent as Coding } from '../../assets/coding.svg';
import "./style.css"


function About() {
  return (
    <div className='about'>
        <div className='about-container'>
            <Coding style={{width:"35rem", height:"35rem", margin:"-6rem auto"}}/>
            <h1 style={{textAlign:"center"}}>About Software Developer <span style={{color:"white", fontSize:"2.5rem"}}>BTK</span></h1>
            <div className='container-border'>
                <p>Hi, I'am Bedirhan Talha Kuzucu </p> 
                <p>I’m currently learning Full-Stack Development Languages.</p>
                <p>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</p>
                <p><a href="mailto:btk.kzc@gmail.com" className='mail' style={{color:"white", textDecoration:"underline", fontSize:"1.5rem"}}>Send email</a> : btk.kzc@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default About