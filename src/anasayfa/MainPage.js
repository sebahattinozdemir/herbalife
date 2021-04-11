import React from "react";
import "./MainPage.css";
import Carousel from "../carousel/Carousel";

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
              style={{width:"20px",height:"20px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/user-heart-line.png"
            ></img>
                <span style={{ fontSize: "medium" }}>Ücretsiz <strong>Yaşam koçu</strong> desteği &nbsp;
                </span>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 üst-bilgi">
              <p style={{ fontSize: "medium" }}>
              <img
              className="img-fluid"
              style={{width:"20px",height:"20px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/secure-payment-line.png"
            ></img>
                <strong>Ersin Er</strong> Herbalife Distribütörü
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 üst-bilgi">

              <p>
              <img
              className="img-fluid"
              style={{width:"20px",height:"20px",marginRight:"0.6rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/archive-line.png"
            ></img>
                <span style={{ fontSize: "medium" }}>
                <strong>Türkiye ‘nin</strong> her yerine kargo
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
      <br/>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-2">
            <img
              
              className="img-fluid"
              style={{height:"12rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/11/herbalife-kadinlar-icin-urunler.jpg"
            ></img>
          </div>
          
          <div className="col-md-6 col-sm-6 col-12"> 
            <img
              className="img-fluid"
              style={{height:"12rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/herbalife-erkekler-icin-urunler.jpg"
            ></img>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div class="card" style={{ backgroundColor: "#f5f0da"}}>
              <h5 class="card-header">Özel Setler</h5>
              <div class="card-body">
                <p class="card-text">
                Beslenme hedeflerinize ulaşmanıza yardımcı olmak için tasarlandı.
                </p>


                <a href="#" class="btn btn-light text-success">
                  Tümünü Gör
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8 shadow bg-white" style={{borderRadius:"0.5rem"}}>
            <div className="row m-0 p-0" >
              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 pt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div class="card" style={{ backgroundColor: "#81bac3" }}>
              <h5 class="card-header">Kilo Yönetimi</h5>
              <div class="card-body">
                <p class="card-text">
                  Beslenme hedeflerinize ulaşmanıza yardımcı olmak için
                  tasarlandı.
                </p>
                <a href="#" class="btn btn-light text-success">
                  Tümünü Gör
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8 shadow bg-white" style={{borderRadius:"0.5rem"}}>
          <div className="row m-0 p-0" >
              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2020/10/0142_TU_Chocolate_Square-247x247.png"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2020/10/0142_TU_Chocolate_Square-247x247.png"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2020/10/0142_TU_Chocolate_Square-247x247.png"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2020/10/0142_TU_Chocolate_Square-247x247.png"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2020/10/0142_TU_Chocolate_Square-247x247.png"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 pt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div class="card" style={{ backgroundColor: "#bcc6be"}}>
              <h5 class="card-header">Kişisel Bakım</h5>
              <div class="card-body">
                <p class="card-text">
                  Herbalife SKIN® ve Herbal Aloe güzellik ürünlerimiz, cilt ve
                  saç bakımı için uzman çözümler sunar.
                </p>
                <a href="#" class="btn btn-light text-success">
                  Tümünü Gör
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8 shadow bg-white" style={{borderRadius:"0.5rem"}}>
          <div className="row m-0 p-0" >
              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 pt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div class="card" style={{ backgroundColor: "#9ec1a3" }}>
              <h5 class="card-header">Takviye Edici Gıdalar</h5>
              <div class="card-body">
                <p class="card-text">
                  Vücudunuzun ihtiyaç duyabileceği vitamin ve mineralleri
                  sağlamak için geliştirilmiştir.
                </p>
                <a href="#" class="btn btn-light text-success">
                  Tümünü Gör
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8 shadow bg-white" style={{borderRadius:"0.5rem"}}>
          <div className="row m-0 p-0" >
              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 pt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <div class="card" style={{ backgroundColor: "#70a9a2" }}>
              <h5 class="card-header">Shaker & Suluklar</h5>
              <div class="card-body">
                <p class="card-text">
                  Yaşam tarzı olarak Herbalife’ı seçtiğinizi gösteren faydalı
                  ürünler.
                </p>
                <a href="#" class="btn btn-light text-success">
                  Tümünü Gör
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-8 shadow bg-white" style={{borderRadius:"0.5rem"}}>
          <div className="row m-0 p-0" >
              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 mt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>


              <div className="m-0 p-0 text-center" style={{ width: "20%" }}>
                <div className="w-100" style={{ position: "relative" }}>
                  <span
                    class="badge badge-info p-2"
                    style={{ position: "absolute", top: "25%" }}
                  >
                    INDIRIM !
                  </span>
                  <img
                    class="card-img-top"
                    src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                    alt="urun adi"
                  />
                </div>

                <div className="w-100 pt-1">
                <p style={{ lineHeight: "5px" }}>Tanisma Paketi</p>
                <p style={{ lineHeight: "5px" }}>250 TL</p>
                </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-100 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5><img
              className="img-fluid"
              style={{width:"25px",height:"25px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/secure-payment-line.png"
            ></img> Güvenli Ödeme</h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Web sitemiz SSL sertifikalıdır. Tüm bilgileriniz şifrelenir.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5><img
              className="img-fluid"
              style={{width:"25px",height:"25px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/user-heart-line.png"
            ></img> 7/24 Destek</h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Bize günün her saatinde ulaşabilir ve destek alabilirsiniz.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5><img
              className="img-fluid"
              style={{width:"25px",height:"25px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/arrow-go-back-line.png"
            ></img> Ücretsiz İade</h5>
              <p className="font-weight-light" style={{ fontSize: "medium" }}>
                Ürünlerimizi koşulsuz şartsız geri iade edebilirsiniz.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <h5><img
              className="img-fluid"
              style={{width:"25px",height:"25px",marginRight:"0.5rem"}}
              src="https://herbaldamla.com/wp-content/uploads/2020/10/archive-line.png"
            ></img> Güvenli Teslimat</h5>
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
