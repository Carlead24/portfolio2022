import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Musicplayer from '../../img/musicplayer.png'
import Starbucks from '../../img/Starbucks.png'
import Carleadcommerce from '../../img/carleadcommerce.png'
import Calculator from '../../img/calculator.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio =() =>{
    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div className="portfolio" id='portfolio'>
        {/* heading */}
        <span style= {{color: darkMode? 'white': ''}}> Recent Projects</span>
        <span> Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Musicplayer} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Starbucks} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Carleadcommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Calculator} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio