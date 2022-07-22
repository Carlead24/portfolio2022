import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './RESUME 2022.pdf'
import { motion } from 'framer-motion'

const Services = () => {
const transition = {duration : 1, type: 'spring'}
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span>My Awesome</span>
            <span>Stacks</span>
            <span> I build awesome and
                  responsive websites with the right aesthetics,<br />
                  providing a user-friendly environment and
                  with the right functionalities.</span>
            <a href={Resume} download>
            <button className="button s-button"> Download CV </button>
            </a>   
        </div>

        <div className="cards">
        <motion.div 
            initial={{left:'10rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            style={{left:'14rem'}}>
            <Card
            emoji={Heartemoji}
            heading={'HTML/CSS'}
            detail={'Hyper-text Markup Language, Cascading Style Sheets.'}
            />
        </motion.div>

        <motion.div 
            initial={{left:'-5rem'}}
            whileInView={{left:'-35%'}}
            transition={transition}
            style={{top:'12rem', left:'-4rem'}}>
            <Card
            emoji={Glasses}
            heading={'JAVASCRIPT'}
            detail={'JavaScript is the worlds most popular programming language, JavaScript is the programming language of the Web.'}
            />
        </motion.div>

        <motion.div 
        initial={{left:'15rem'}}
        whileInView={{right:'-30rem'}}
        transition={transition}
        style={{top:'17rem', left:'12rem'}}>
            <Card
            emoji={Humble}
            heading={'REACT'}
            detail={'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'}
            />
        </motion.div>
        </div>
    </div>
  )
}

export default Services