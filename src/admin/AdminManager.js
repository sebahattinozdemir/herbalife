import React, { useEffect } from "react";
import Blog from "./blog/Blog";
import "./AdminManager.css";
import KiloYonetim from "./kiloYonetim/KiloYonetim";
import KisiselBakim from "./kisiselBakim/KisiselBakim";
import OzelSet from "./ozelSetler/OzelSet";
import Takviye from "./takviyeEdiciGidalar/Takviye";
import Tanitim from "./tanitimUrunleri/Tanitim";

function AdminManager(props) {
  const { handleLogout } = props;

  useEffect(() => {
         kiloYonetimi();
  }, []);

  const blog = () => {
    document.getElementById("blog").style.display = "block";
    document.getElementById("kilo-yonetim").style.display = "none";
    document.getElementById("kisisel-bakim").style.display = "none";
    document.getElementById("ozel-set").style.display = "none";
    document.getElementById("takviye").style.display = "none";
    document.getElementById("tanitim").style.display = "none";
  };

  const kiloYonetimi = () => {
    document.getElementById("blog").style.display = "none";
    document.getElementById("kilo-yonetim").style.display = "block";
    document.getElementById("kisisel-bakim").style.display = "none";
    document.getElementById("ozel-set").style.display = "none";
    document.getElementById("takviye").style.display = "none";
    document.getElementById("tanitim").style.display = "none";
  };

  const kisiselBakim = () => {
    document.getElementById("blog").style.display = "none";
    document.getElementById("kilo-yonetim").style.display = "none";
    document.getElementById("kisisel-bakim").style.display = "block";
    document.getElementById("ozel-set").style.display = "none";
    document.getElementById("takviye").style.display = "none";
    document.getElementById("tanitim").style.display = "none";
  };

  const ozelSet = () => {
    document.getElementById("blog").style.display = "none";
    document.getElementById("kilo-yonetim").style.display = "none";
    document.getElementById("kisisel-bakim").style.display = "none";
    document.getElementById("ozel-set").style.display = "block";
    document.getElementById("takviye").style.display = "none";
    document.getElementById("tanitim").style.display = "none";
  };

  const takviye = () => {
    document.getElementById("blog").style.display = "none";
    document.getElementById("kilo-yonetim").style.display = "none";
    document.getElementById("kisisel-bakim").style.display = "none";
    document.getElementById("ozel-set").style.display = "none";
    document.getElementById("takviye").style.display = "block";
    document.getElementById("tanitim").style.display = "none";
  };

  const tanitim = () => {
  
    document.getElementById("blog").style.display = "none";
    document.getElementById("kilo-yonetim").style.display = "none";
    document.getElementById("kisisel-bakim").style.display = "none";
    document.getElementById("ozel-set").style.display = "none";
    document.getElementById("takviye").style.display = "none";
    document.getElementById("tanitim").style.display = "block";
  };

  return (
    <div className="row">
      <div class="container-fluid">
        <div className="row d-lg-none d-xl-none d-md-block d-sm-block d-xs-block ">
          <div className="col-12 text-center">
            <h3>ADMIN PANEL</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-2 col-xs-12 px-1 bg-success vh-lg-100">
            <div className="col-12 mt-lg-5">
              <button
                className="btn btn-outline text-white m-3"
                onClick={kiloYonetimi}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Kilo Yonetim Urunleri
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={kisiselBakim}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Kisisel Bakim Urunleri
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={ozelSet}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Ozel Setler
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={takviye}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Takviye Edici Gidalar
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={tanitim}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Tanitim Urunleri
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={blog}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Blog Islemleri
              </button>

              <button
                className="btn btn-outline text-white m-3"
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Iletisim Bilgileri
              </button>

              <button onClick={handleLogout} className="btn btn-danger text-white m-3">
                logout
              </button>

            </div>
          </div>

          <div class="col-lg-10 col-xs-12 vh-100 bg-dark">
            <div className="row d-none d-lg-block d-md-none d-xl-block">
              <div className="col-12 text-center text-white mt-3">
                <h3>ADMIN PANEL</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Blog></Blog>
                <KiloYonetim></KiloYonetim>
                <KisiselBakim></KisiselBakim>
                <Takviye></Takviye>
                <OzelSet></OzelSet>
                <Tanitim></Tanitim>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManager;
