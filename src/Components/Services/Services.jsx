import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span> I build awesome and
                  responsive websites with the right aesthetics,<br />
                  providing a user-friendly environment and
                  with the right functionalities.</span>
            <a href={Resume} download>
                <button className="button s-button"> Download CV </button>
            </a>   
        </div>

        <div className="cards">
            {/* first card */}

            <div style={{left:'14rem'}}>
                <Card
                emoji={Heartemoji}
                heading={'HTML/CSS'}
                detail={'Hyper-text Markup Language, Cascading Style Sheets.'}
                />
           </div>
           {/* second card */}

           <div style={{top:'12rem', left:'-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'JAVASCRIPT'}
                detail={'JavaScript is the worlds most popular programming language, JavaScript is the programming language of the Web.'}
                />
           </div>
          {/* third card */}

          <div style={{top:'19rem', left:'12rem'}}>
                <Card
                emoji={Humble}
                heading={'REACT'}
                detail={'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'}
                />
           </div>

        </div>
    </div>
  )
}

export default Services