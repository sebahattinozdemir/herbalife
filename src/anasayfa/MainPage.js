import React, { useState } from "react";
import "./MainPage.css";
import Carousel from "../carousel/Carousel";
import Sepet from "@material-ui/icons/AddShoppingCart";

import Owl from "../owlcarousel/Owl.js";
import { Link } from "react-router-dom";

function MainPage() {

  return (
    <div>
      <div className="w-100 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 üst-bilgi">
              <p style={{ fontSize: "medium" }}>
                <img
                  className="img-fluid"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/user-heart-line.png"
                ></img>
                <span style={{ fontSize: "medium" }}>
                  Ücretsiz <strong>Yaşam koçu</strong> desteği &nbsp;
                </span>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 üst-bilgi">
              <p style={{ fontSize: "medium" }}>
                <img
                  className="img-fluid"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/secure-payment-line.png"
                ></img>
                <strong>Herbalalerya</strong> Herbalife Distribütörü
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 üst-bilgi">
              <p>
                <img
                  className="img-fluid"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/archive-line.png"
                ></img>
                <span style={{ fontSize: "medium" }}>
                  <strong>Türkiye</strong>‘nin her yerine kargo &nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
      <br />
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-2">
            <img
              className="img-fluid"
              style={{ height: "12rem" }}
              src="https://herbaldamla.com/wp-content/uploads/2020/11/herbalife-kadinlar-icin-urunler.jpg"
            ></img>
          </div>

          <div className="col-md-6 col-sm-6 col-12">
            <img
              className="img-fluid"
              style={{ height: "12rem" }}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/herbalife-erkekler-icin-urunler.jpg"
            ></img>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div className="card" style={{ backgroundColor: "#F3F1AA" }}>
              <h5 className="card-header">Özel Setler</h5>
              <div className="card-body">
                <p className="card-text">
                  Beslenme hedeflerinize ulaşmanıza yardımcı olmak için
                  tasarlandı.
                </p>

                <Link
                      className="text-decoration-none w-100 btn btn-light text-dark"
                      to="/magaza/ozel-setler"
                    >
                      
                  <strong>
                    <span style={{ color: "#F3F1AA" }}>Tümünü Gör</span>
                  </strong>

                </Link>

              </div>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-8 col-md-8 shadow bg-white owl-main-page"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="row m-0 p-0">
              <Owl />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div className="card" style={{ backgroundColor: "#81bac3" }}>
              <h5 className="card-header">Kilo Yönetimi</h5>
              <div className="card-body">
                <p className="card-text">
                  Beslenme hedeflerinize ulaşmanıza yardımcı olmak için
                  tasarlandı.
                </p>
          
                <Link
                      className="text-decoration-none w-100 btn btn-light"
                      to="/magaza/ozel-setler"
                    >
                      
                  <strong>
                    <span style={{ color: "#F3F1AA" }}>Tümünü Gör</span>
                  </strong>

                </Link>

              </div>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-8 col-md-8 shadow bg-white owl-main-page"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="row m-0 p-0">
              <Owl />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div className="card" style={{ backgroundColor: "#bcc6be" }}>
              <h5 className="card-header">Kişisel Bakım</h5>
              <div className="card-body">
                <p className="card-text">
                  Herbalife SKIN® ve Herbal Aloe güzellik ürünlerimiz, cilt ve
                  saç bakımı için uzman çözümler sunar.
                </p>
                 <Link
                      className="text-decoration-none w-100 btn btn-light"
                      to="/magaza/kisisel-bakim"
                    >
                      
                  <strong>
                    <span style={{ color: "#F3F1AA" }}>Tümünü Gör</span>
                  </strong>

                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-8 col-md-8 shadow bg-white owl-main-page"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="row m-0 p-0">
              <Owl />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div className="card" style={{ backgroundColor: "#9ec1a3" }}>
              <h5 className="card-header">Takviye Edici Gıdalar</h5>
              <div className="card-body">
                <p className="card-text">
                  Vücudunuzun ihtiyaç duyabileceği vitamin ve mineralleri
                  sağlamak için geliştirilmiştir.
                </p>
                <Link
                      className="text-decoration-none w-100 btn btn-light"
                      to="/magaza/takviye-edici-gidalar"
                    >
                      
                  <strong>
                    <span style={{ color: "#F3F1AA" }}>Tümünü Gör</span>
                  </strong>

                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-8 col-md-8 shadow bg-white owl-main-page"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="row m-0 p-0">
              <Owl />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div className="card" style={{ backgroundColor: "#70a9a2" }}>
              <h5 className="card-header">Shaker & Suluklar</h5>
              <div className="card-body">
                <p className="card-text">
                  Yaşam tarzı olarak Herbalife’ı seçtiğinizi gösteren faydalı
                  ürünler.
                </p>
                <Link
                      className="text-decoration-none w-100 btn btn-light"
                      to="/magaza/tanitim-urunleri"
                    >
                      
                  <strong>
                    <span style={{ color: "#F3F1AA" }}>Tümünü Gör</span>
                  </strong>

                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-9 col-lg-8 col-md-8 col-sm-12 shadow bg-white owl-main-page"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="row m-0 p-0">
              <Owl />
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5>
                <img
                  className="img-fluid"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/secure-payment-line.png"
                ></img>{" "}
                Güvenli Ödeme
              </h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Web sitemiz SSL sertifikalıdır. Tüm bilgileriniz şifrelenir.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5>
                <img
                  className="img-fluid"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/user-heart-line.png"
                ></img>{" "}
                7/24 Destek
              </h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Bize günün her saatinde ulaşabilir ve destek alabilirsiniz.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5>
                <img
                  className="img-fluid"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/arrow-go-back-line.png"
                ></img>{" "}
                Ücretsiz İade
              </h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Ürünlerimizi koşulsuz şartsız geri iade edebilirsiniz.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5>
                <img
                  className="img-fluid"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "0.5rem",
                  }}
                  src="https://herbaldamla.com/wp-content/uploads/2020/10/archive-line.png"
                ></img>{" "}
                Güvenli Teslimat
              </h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Siparişlerinizi özenle paketliyor ve kargoluyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
