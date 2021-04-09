import { Autorenew } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import turkcin from "./TurkCin.mp4";

function Carousel() {
  return (
    <div className="row" style={{ paddingTop: "0.5rem",marginLeft:"1rem" }}>
     
       
    <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{  }}
    >
      <ReactPlayer
        className="react-player"
        style={{  overFlow: "hidden" }}
        url={turkcin}
        controls={true}
        height="20rem"
        padding="2rem"
        width="25rem"
        
      />
      <br/>
      <br/>
    </div>


    <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{  }}
    >
      <ReactPlayer
        className="react-player"
        style={{ overFlow: "hidden" }}
        url={turkcin}
        controls={true}
        height="20rem"
        padding="2rem"
        width="25rem"
        
        
      />
      <br/>
      <br/>
    </div>

    <div 
      className="col-lg-4 col-md-6 col-sm-6 col-12 video-wrapper"
      style={{  }}
    >
      <ReactPlayer
        className="react-player"
        style={{  overFlow: "hidden" }}
        url={turkcin}
        controls={true}
        height="20rem"
        padding="2rem"
        width="25rem"
    
        
      />
      <br/>
      <br/>
    </div>

  

    

</div>
  );
}

export default Carousel;
