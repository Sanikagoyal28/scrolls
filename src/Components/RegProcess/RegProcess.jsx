

import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Assets/c101.png"
import image2 from "../Assets/p102.png"
import image3 from "../Assets/p103.png"
import Footer from '../footer/footer';
import Navbar from '../Navbar/navbar';
import "./reg.css"

const RegProcess = () => {
    return <>
        <Navbar />
        <div className="regProcess">
            <p id="process">Registration Process</p>
            <img src={image1} className="carouselImg" />
            <img src={image2} className="carouselImg" />
            <img src={image3} className="carouselImg" />
            {/* <div className="carousel">
                <Carousel showThumbs={false} showArrows={true} autoPlay={false} interval={2000}>

                    <img src={image1} className="carouselImg" />

                    <img src={image2} className="carouselImg" />

                    <img src={image3} className="carouselImg" />

                </Carousel>
            </div> */}
        </div>
        <Footer />
    </>
}

export default RegProcess