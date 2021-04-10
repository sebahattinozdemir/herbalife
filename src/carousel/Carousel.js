import { Autorenew } from "@material-ui/icons";
import "./Carousel.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import herbal1 from "./herbalife1.mp4";
import herbal2 from "./herbalife2.mp4";
import herbal3 from "./herbalife3.mp4";

function Carousel() {
  return (
    <div className="row" style={{ paddingTop: "0.5rem" }}>
   
     <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{  }}
    >
      <ReactPlayer
        className="react-player"
        style={{ margin:"auto", overFlow: "hidden" }}
        url={herbal1}
        controls={true}
        height="20rem"
        width="25rem"
        
        
      />
    </div>


    <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{ margin:"auto", overFlow: "hidden"  }}
    >
      <ReactPlayer
        className="react-player"
        style={{margin:"auto", overFlow: "hidden" }}
        url={herbal2}
        controls={true}
        height="20rem"
        width="25rem"
       
        
        
      />
    </div>

    <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{  }}
    >
      <ReactPlayer
        className="react-player"
        style={{margin:"auto",  overFlow: "hidden" }}
        url={herbal3}
        controls={true}
        height="20rem"
        width="25rem" 
      />
    </div>
    
       
    

  

    

</div>
  );
}

export default Carousel;
