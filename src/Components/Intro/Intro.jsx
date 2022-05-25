import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Img22 from '../../img/Img22.png'
import Crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello, I Am </span>
                <span>Khaleed Awaiye</span>
                <span>An aspiring FRONTEND DEVELOPER, skilled in solving problems in HTML, CSS, JAVASCRIPT, REACT And REDUX.</span>
            </div>

            <button className="button i-button">Hire me </button>

            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>

        <div className="i-right">
          <img src= {Img22} alt="" />
          <img src= {glassesimoji} alt="" />
          <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Frontend' txt2='Developer'/>
          </div>
          <div style={{top:'17rem', right:'65%'}}> 
            <FloatingDiv image={thumbup} txt1='Software' txt2='Developer'/>
          </div>
        </div>
    </div>
  )
}

export default Intro