import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SSL from "./ssl.png";

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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
           
            <img src={SSL} style={{width:"90%",display:"block",margin:"auto"}}></img>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-1">
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-1">
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

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-1">
            <p
                className="font-weight-bold text-dark ml-3"
                style={{ fontSize: "large" }}
              >
                İletişim
              </p>

              <a className="footeremail" href="mailto:Herbalalerya@gmail.com" style={{ float: "left"}} >
                    &nbsp;<EmailIcon style={{fontSize:"24px"}}/>
                  </a> 
                  <p style={{fontSize:"medium"}}>&nbsp;Herbalalerya@gmail.com</p>
                  
                  <a className="footerphone"
                  href="tel: +905345699125"
                  style={{ float: "left"}}
                >
                  &nbsp;<SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                  </a> 
                  <p style={{fontSize:"medium"}}>&nbsp;0534 569 91 25</p>

                  <a className="footerphone"
                  href="tel: +905526587882"
                  style={{ float: "left"}}
                >
                  &nbsp;<SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                  </a> 
                  <p style={{fontSize:"medium"}}>&nbsp;0552 658 78 82</p>

                  <a className="footerphone"
                  href="tel: +905525754132"
                  style={{ float: "left"}}
                >
                  &nbsp;<SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                  </a> 
                  <p style={{fontSize:"medium"}}>&nbsp;0552 575 41 32</p>
                  
                  <a href="https://www.instagram.com/herbal_alerya?r=nametag" target="_blank">
                  <InstagramIcon  
                        style={{float:"left",marginLeft:"5px"}}
                    />
                  </a>
                  <a href="https://www.facebook.com/HerbalAlerya" target="_blank">
                    <FacebookIcon style={{float: "left",marginLeft:"0.5rem"}}/>
                  </a>
                 


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

            <div className="roof-phone">
                <a
                    href="tel: +905464753883"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    <i className="fa fa-phone phone-icon"></i>
                  
                </a>
            </div>

            

            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905464753883"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp whatsapp-icon"></i>
                  
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
