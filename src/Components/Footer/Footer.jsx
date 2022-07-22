import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import UilWhatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook'
import Uilinsta from '@iconscout/react-unicons/icons/uil-instagram'
import Uiltwitter from '@iconscout/react-unicons/icons/uil-twitter'
import Uilgithub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
   <div className="footer">
        <img src={Wave} alt="" style = {{width:'100%'}} />
        <div className="f-content">
            <span>Khaleedinho@gmail.com</span>
            <div className="f-icon">
                <UilWhatsapp size="3rem" color="#000000" />
                <UilFacebook size="3rem" color="#000000" />
                <Uilinsta color='#000000' size='3rem'/>
                <Uiltwitter color='#000000' size='3rem'/>
                <Uilgithub color='#000000' size='3rem'/>
            </div>
        </div>
   </div>
  )
}

export default Footer