import "./ÜrünAcıklama.css";
import React, { Component, useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import ÜrünResmi from "./ürün_acıklama_resmi.png";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import html from "react-inner-html";

export default function ÜrünAcıklama(props) {
  const [miktar, setMiktar] = useState(1);

  const arttır = (e) => {
    e.preventDefault();
    setMiktar(miktar + 1);
    if (miktar > 8) {
      setMiktar(9);
    }
  };

  const azalt = (e) => {
    e.preventDefault();
    setMiktar(miktar - 1);
    if (miktar < 1) {
      setMiktar(0);
    }
  };

  const [eklenenUrunler, setEklenenUrunler] = useState([]);

  const sepeteEkle = () => {
    setEklenenUrunler((eklenenUrunler) => [
      ...eklenenUrunler,
      {
        urunAdi: props.location.state.ürünün_ismi,
        urununResmi: props.location.state.ürünün_resmi,
        miktar: miktar,
        urunFiyati: props.location.state.ürünün_son_fiyatı,
      },
    ]);

    setTimeout(() => {
      console.log(eklenenUrunler);
    }, 500);
  };

  return (

    <div className="container">
  <div
      className="row bg-white"
      style={{ padding: "2rem" }}
    >
      <div className="col-lg-6 col-xs-12">
        <h4 className="ürünacıklama_indirim mt-5">İndirim!</h4>
        <img
          src={props.location.state.ürünün_resmi}
          className="img-fluid"
          alt="urun resmi"
        ></img>
      </div>

      <div className="col-lg-6 col-xs-12">
        <h3 className="mt-3">{props.location.state.ürünün_ismi}</h3>
        <hr />
        <div className="row mx-auto">
          <div className="col-lg-6 col-sm-12">
            <p className="ürünacıklama_ilk_fiyat">
              {props.location.state.ürünün_ilk_fiyatı}
            </p>
            <p className="ürünacıklama_indirimli_fiyat">
              {props.location.state.ürünün_son_fiyatı}
            </p>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                className="btn btn-light ürünacıklama_azalt"
                onClick={azalt}
                style={{ width: "3rem", height: "3rem", fontSize: "x-large" }}
              >
                -
              </button>
              <span className="px-3 py-1"
                style={{
                  fontSize: "x-large",
                }}
              >
                {miktar}
              </span>
              <button
                className="btn btn-light ürünacıklama_arttır"
                onClick={arttır}
                style={{ width: "3rem", height: "3rem", fontSize: "x-large" }}
              >
                +
              </button>
              <button
                className="btn btn-success mx-3"
                style={{
                  fontSize: "medium",
                  padding: "auto",
                }}
                onClick={sepeteEkle}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>

        <div className="whatsappMesajıGönder" style={{ marginTop: "5rem" }}>
          <a href="https://wa.me/+905464753883" rel="noreferrer" target="_blank" style={{}}>
            <WhatsAppIcon
              className="icon"
              style={{ fontSize: "x-large", color: "#26F91E" }}
            />
            &nbsp;&nbsp;
            <span style={{ color: "black" }}>Whatsapp Mesajı Gönder</span>
          </a>
        </div>
        <br />
        <div className="siziArayalım">
          <a href="tel: +905464753883" target="_blank" rel="noreferrer" style={{}}>
            <SettingsPhoneIcon
              className="icon"
              style={{ fontSize: "x-large", color: "blue" }}
            />
            &nbsp;&nbsp;
            <span style={{ color: "black" }}>Sizi arayalım!</span>
          </a>
        </div>
        <br />
        <hr style={{ marginBottom: "2px" }} />
        <p style={{ fontSize: "small", marginBottom: "2px" }}>
          Stok Kodu: 5561
        </p>
        <hr
          style={{
            style: "dotted",
            marginBottom: "2px",
            marginTop: "-2px",
          }}
        />
        <p style={{ fontSize: "small" }}>
          {" "}
          <strong>Kategori:</strong> {props.location.state.urun_kategori}
        </p>
      </div>
      <div className="col-lg-12 col-xs-12 ürünacıklama_alt_taraf">
        <hr />
        <Tabs
          defaultTab="one"
          onChange={(tabId) => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab
              className="acıklama_tabs"
              tabFor="one"
              style={{ backgroundColor: "#F4F5EC", borderRadius: "0.5rem" }}
            >
              Açıklama
            </Tab>
            &nbsp;
            <Tab
              className="acıklama_tabs"
              tabFor="two"
              style={{ backgroundColor: "#F4F5EC", borderRadius: "0.5rem" }}
            >
              Ek Bilgi
            </Tab>
          </TabList>
          <TabPanel tabId="one" style={{ margin: "2rem" }}>
            <p
              style={{ textAlign: "justify", fontSize: "small" }}
              {...html(props.location.state.urun_aciklama)}
            ></p>
          </TabPanel>
          <TabPanel tabId="two" style={{ margin: "2rem" }}>
            <p
              style={{ textAlign: "justify", fontSize: "small" }}
              {...html(props.location.state.urun_ekbilgi)}
            ></p>
          </TabPanel>
          <br />
        </Tabs>
      </div>

      <br />
      <br />
    </div>
    </div>
  
  );
}
