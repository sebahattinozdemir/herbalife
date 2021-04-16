import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = (e)=>{
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  return (
    <div id="footer" className="footer w-100">
      <div className="container">
        <hr />
        <div className="row p-3">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <p
              className="font-weight-bold text-dark"
              style={{ fontSize: "large" }}
            >
              Hakkımızda
            </p>
            <p className="text-dark" style={{fontSize:"medium",textAlign:"justify"}}>
              1980’de kurulan Herbalife Nutrition, günümüzde 8.000 aşkın
              çalışanıyla 90’dan fazla ülkede faaliyet göstermektedir.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-1">
            <p
              className="font-weight-bold text-dark ml-3"
              style={{ fontSize: "large" }}
            >
              Öne Çıkan Kategoriler
            </p>
            <ul className="list-group footer-list-group">
              <li >
                <Link className="text-decoration-none footer-btn-link" to="/" onClick={scrollToTop}>
                  Sporcu Beslenmesi
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none footer-btn-link" to="/" onClick={scrollToTop}>
                  Shaker / Suluklar
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none footer-btn-link" to="/" onClick={scrollToTop}>
                  Kişisel Bakım Ürünleri
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none footer-btn-link" to="/" onClick={scrollToTop}>
                  Atıştırmalıklar
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-1">
            <p
              className="font-weight-bold text-dark ml-3"
              style={{ fontSize: "large" }}
            >
              Bilgilendirme
            </p>

            <ul className="list-group footer-list-group">
              <li >
                <Link className="text-decoration-none footer-btn-link" to="/mesafeli-satis-sozlesmesi" onClick={scrollToTop}>
                  Mesafeli Satis Sözleşmesi
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none footer-btn-link" to="/gizlilik-politikasi" onClick={scrollToTop}>
                  Gizlilik Politikasi
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none footer-btn-link" to="/sik-sorulan-sorular" onClick={scrollToTop}>
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none footer-btn-link" to="/hakkimizda" onClick={scrollToTop}>
                  Hakkımızda
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="w-100 footer-alt ">
        <div className="w-100">
          <div className="row mr-2 ml-2" >
            
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-white">
              <img
                className="img-fluid footer-nutrition"
               
                src="https://herbaldamla.com/wp-content/uploads/2020/11/herbalife-logo-beyaz.png"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-center text-white">
              <p className="mt-4 bagimsizuye" >© 2021 Bağımsız Herbalife Üyesi</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-center text-white">
              <p className="mt-4 sebertech" >© 2021 SeBer Tech</p>
            </div>

            <div class="roof-phone">
                <a
                    href="tel: +905464753883"
                    class="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    <i class="fa fa-phone phone-icon"></i>
                  
                </a>
            </div>

            

            <div class="roof-whatsapp">
                <a
                    href="https://wa.me/+905464753883"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                  
                </a>
            </div>

          </div>
        </div>
      </div>
      <div className="w-100 footer-alt2 p-3">
      
      </div>
    </div>
  );
  
}


export default Footer;
