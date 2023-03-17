
import Navbar from "../Navbar/navbar"
import image from "../Assets/image1.svg"
import "./year.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PreviousYear() {

    return <>
        <Navbar />
        <div className="yearOutdiv">

            <div className="carousel">
                <Carousel showThumbs={false} >
                    <div>
                        <p className="yearHead">Glimpse of new image</p>
                        <img src={image} className="carouselImg" />
                        <p className="yearText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                    </div>
                    <div>
                    <p className="yearHead">Glimpse of new image</p>
                        <img src={image} className="carouselImg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image} className="carouselImg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={image} className="carouselImg" />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </div>

        </div>
    </>
}

export default PreviousYear