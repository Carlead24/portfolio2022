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
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}

    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style= {{color: darkMode? 'white': ''}}>Hello, I Am </span>
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
          <motion.img
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition={transition}
          src= {glassesimoji} 
          alt="" />

          <motion.div 
            initial={{top:'-4%', left:'67%'}}
            whileInView={{left:'70%'}}
            transition={transition}

          style={{top:'-4%', left:'71%'}}
          className='floating-div'
          >
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </motion.div>

          <motion.div 
            initial={{left:'9rem', top:'18rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}

          style={{top:'17rem', right:'65%'}}
          className='floating-div'
          > 
            <FloatingDiv image={thumbup} txt1='Frontend' txt2='Developer'/>
          </motion.div>
        </div>
    </div>
  )
}

export default Intro