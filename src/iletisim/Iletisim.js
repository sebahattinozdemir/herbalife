import "./İletisim.css";
import React from "react";

function Iletisim() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-4">İLETİŞİM</h3>

        
       
        <div className="row shadow bg-white p-3 border border-5">

        <div className="row">
        <img style={{maxHeight:'280px'}}
          className="img-fluid w-100"
          src="https://hedefkilom.com/wp-content/uploads/Herbalife-Banner-02.jpeg"
        ></img>

        </div>

          <div className="col-12 text-center">
            <p className="font-weight-bold" style={{ fontSize: "x-large" }}>
              Bizi Arayin
            </p>
            <p className="font-weight-normal iletisim-merak" style={{ fontSize: "x-large" }}>Merak ettiklerinizi birlikte yanıtlayalım.</p>
          </div>

          <div className="col-12 text-center">
            <p className="badge badge-info btn font-weight-normal" style={{ fontSize: "x-large",backgroundColor:"#7ac043" }}>0552 575 41 32</p>
          </div>

          <div className="col-sm-12 col-12 harita" style={{align:"center",display:"block",margin:"auto"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.253654430762!2d30.539172115317857!3d37.784094879757724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b5e510f10901%3A0x6a7f5b24ef97b331!2sFatih%2C%20Mesut%20%C5%9Eener%20Cd.%20No%3A12%20D%3A10%2C%2032200%20Isparta%20Merkez%2FIsparta!5e0!3m2!1str!2str!4v1618178155137!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"35rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",paddingBottom:"0.5rem",paddingTop:"0.5rem",border:"2px solid #7ac043"}}> </iframe>
          </div> 
          <br/>

          <div className="col-12 text-center iletisim-div" style={{align:"center"}}>
            <p className="font-weight-bold iletisim-adres-bilgi" style={{ fontSize: "x-large" }}>
              Adres Bilgileri
            </p>

            <p className="col-12 text-center iletisim-adres" style={{ fontSize: "x-large" }}>
            Fatih Mahallesi 200. Cadde No:12 Daire:10 Merkez/Isparta          
            </p>
          </div>
          


        </div>

        


      </div>
    </div>
  );
}

export default Iletisim;
