import React from 'react'
import './owlcarouselForVideos.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import ReactPlayer from "react-player";
import herbal1 from "../carousel/herbalife1.mp4";
import herbal2 from "../carousel/herbalife2.mp4";
import herbal3 from "../carousel/herbalife3.mp4";


//Owl Carousel Settings
const options = {
    margin: 1,
    responsiveClass: true,
   // dots:2,
   // dotsSpeed:2,
   // navText: ["",""],
    loop:true,
    smartSpeed: 1000,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
            autoplay: false,
        },
        400: {
            items: 1,
            autoplay: false,
        },
        600: {
            items: 2,
            autoplay: false,
        },
        700: {
            items: 2,
            autoplay: false,
        },
        1000: {
            items: 3,
            autoplay: true,
        }
    },
  };




export default function owlcarouselForVideos() {
    
    
    return (
        
       
        <OwlCarousel className="owl-theme owl-for-videos" {...options}>

            <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{margin:"auto",  overFlow: "hidden" }}
                    url={herbal1}
                    controls={true}
                    height="20rem"
                    width="25rem" 
                    
                />
            </div>

            <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{margin:"auto",  overFlow: "hidden" }}
                    url={herbal2}
                    controls={true}
                    height="20rem"
                    width="25rem" 
                />
            </div>

            <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{margin:"auto",  overFlow: "hidden" }}
                    url={herbal3}
                    controls={true}
                    height="20rem"
                    width="25rem" 
                />
            </div>

            <div className="item owl-slider">
                <ReactPlayer
                    className="react-player"
                    style={{margin:"auto",  overFlow: "hidden" }}
                    url={herbal3}
                    controls={true}
                    height="20rem"
                    width="25rem" 
                />
            </div>
           

           
            
            
           
        </OwlCarousel>

        
      
    )
}

