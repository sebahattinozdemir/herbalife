import React from "react";

function Iletisim() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-4">ILETISIM</h3>

        <div className="row">
        <img style={{maxHeight:'280px'}}
          className="img-fluid w-100"
          src="https://hedefkilom.com/wp-content/uploads/Herbalife-Banner-02.jpeg"
        ></img>

        </div>
       
        <div className="row shadow bg-white  mx-3 p-3 border border-5">
          <div className="col-12 text-center">
            <p className="font-weight-bold" style={{ fontSize: "x-large" }}>
              Bizi Arayin
            </p>
            <p className="font-weight-normal" style={{ fontSize: "x-large" }}>Merak ettiklerinizi birlikte yanıtlayalım.</p>
          </div>

          <div className="col-12 text-center">
            <p className="badge badge-info btn font-weight-normal" style={{ fontSize: "x-large" }}>0554 452 78 52</p>
          </div>


        </div>

        <div className="row shadow bg-white mx-3 p-3 border border-5">
          <div className="col-12 text-center">
          <iframe
            src="https://yandex.com.tr/map-widget/v1/-/CCUMqNEVoB"
            className="yandexharita"
            style={{
              width: "100%",
              height: "100%",
              frameBorder: "0",
              allowFullScreen: "",
              ariaHidden: "false",
              tabIndex: "0",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          ></iframe>
          </div>

      

        </div>

        <div className="row">
          <div className="col-12 text-center">
            <p className="font-weight-bold" style={{ fontSize: "large" }}>
              Adres Bilgileri
            </p>

            <p className="font-weight-light" style={{ fontSize: "large" }}>
               Turkiye            
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Iletisim;
