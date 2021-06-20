import "./ÜrünAcıklama.css";
import React, { Component, useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import ÜrünResmi from "./ürün_acıklama_resmi.png";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import html from "react-inner-html";
import SiparisOzet from "../store/SiparisOzet";
import { useCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "./../redux/actions/cartActions";

function ÜrünAcıklama(props) {
  const [miktar, setMiktar] = useState(1);
  const [cookies, setCookie] = useCookies(["orderList"]);

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



  const sepeteEkle = (product) => {
    props.actions.addToCart({ product});
  };

  return (
    <div className="container">
      <div className="row bg-white" style={{ padding: "0.5rem" }}>
        <div className="col-lg-6 col-xs-12">
          <h4 className="ürünacıklama_indirim mt-5">İndirim!</h4>
          <img
            src={props.location.state.ürünün_resmi}
            className="img-fluid urunAciklamaResmi"
            alt="urun resmi"
          ></img>
        </div>

        <div className="col-lg-6 col-xs-12">
          <p className="urunAciklamaIsmi mt-3">
            {props.location.state.ürünün_ismi}
          </p>
          <hr />
          <div className="row mx-auto">
            <div className="col-lg-6 col-sm-12">
              <p className="ürünacıklama_ilk_fiyat">
                {props.location.state.ürünün_ilk_fiyatı}₺
              </p>
              <p className="ürünacıklama_indirimli_fiyat">
                {props.location.state.ürünün_son_fiyatı}₺
              </p>
            </div>

            <div className="arttırAzalt">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" onClick={azalt}>
                  -
                </button>
                <button type="button" class="btn btn-light">
                  {miktar}
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={arttır}
                >
                  +
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() =>
                    sepeteEkle({
                      urunAdi: props.location.state.ürünün_ismi,
                      urununResmi: props.location.state.ürünün_resmi,
                      miktar: miktar,
                      urunFiyati: props.location.state.ürünün_son_fiyatı,
                    })
                  }
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>

          <div className="whatsappMesajıGönder" style={{ marginTop: "5rem" }}>
            <a
              href="https://wa.me/+905464753883"
              rel="noreferrer"
              target="_blank"
              style={{}}
            >
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
            <a
              href="tel: +905464753883"
              target="_blank"
              rel="noreferrer"
              style={{}}
            >
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
                style={{
                  backgroundColor: "#37ACB0",
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              >
                Açıklama
              </Tab>
              &nbsp;
              <Tab
                className="acıklama_tabs"
                tabFor="two"
                style={{
                  backgroundColor: "#37ACB0",
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              >
                Ek Bilgi
              </Tab>
            </TabList>
            <TabPanel tabId="one" style={{ margin: "1rem" }}>
              <p
                style={{ textAlign: "justify", fontSize: "small" }}
                {...html(props.location.state.urun_aciklama)}
              ></p>
            </TabPanel>
            <TabPanel tabId="two" style={{ margin: "1rem" }}>
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

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ÜrünAcıklama);
