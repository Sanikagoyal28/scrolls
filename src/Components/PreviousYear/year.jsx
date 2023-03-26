
import Navbar from "../Navbar/navbar"
import imageOne from "../Assets/imageP1.JPG"
import imageTwo from "../Assets/imageP2.JPG"
import imageThree from "../Assets/imageP3.JPG"
import imageFour from "../Assets/imageP4.JPG"
import "./year.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PreviousYear() {

    return <>
        <Navbar />
        <div className="yearOutdiv">

            <div className="carousel">
                <Carousel showThumbs={false} showArrows={true} autoPlay={true} interval={2000}>
                    <div>
                        <p className="yearHead">Glimpse of Horizon Events</p>
                        <img src={imageOne} className="carouselImg" />
                    </div>
                    <div>
                        <p className="yearHead">Glimpse of Horizon Events</p>
                        <img src={imageTwo} className="carouselImg" />
                    </div>
                    <div>
                        <p className="yearHead">Glimpse of Horizon Events</p>
                        <img src={imageThree} className="carouselImg" />
                    </div>
                    <div>
                        <p className="yearHead">Glimpse of Horizon Events</p>
                        <img src={imageFour} className="carouselImg" />
                    </div>
                </Carousel>
            </div>

        </div>
    </>
}

export default PreviousYear