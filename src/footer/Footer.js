import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-100">
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
            <p className="text-dark" style={{fontSize:"small",textAlign:"justify"}}>
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
            <ul className="list-group">
              <li >
                <Link className="text-decoration-none btn-link" to="/">
                  Sporcu Beslenmesi
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none btn-link" to="/">
                  Shaker / Suluklar
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none btn-link" to="/">
                  Kişisel Bakım Ürünleri
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none btn-link" to="/">
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

            <ul className="list-group">
              <li >
                <Link className="text-decoration-none btn-link" to="/mesafeli-satis-sozlesmesi">
                  Mesafeli Satis Sözleşmesi
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none btn-link" to="/gizlilik-politikasi">
                  Gizlilik Politikasi
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none btn-link" to="/sik-sorulan-sorular">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li  >
                <Link className="text-decoration-none btn-link" to="/">
                  Hakkımızda
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="w-100 footer-alt ">
        <div className="w-100">
          <div className="row">
            
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-white">
              <img
                className="img-fluid"
                style={{float:"left",marginLeft:"3rem"}}
                src="https://herbaldamla.com/wp-content/uploads/2020/11/herbalife-logo-beyaz.png"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-center text-white">
              <p className="mt-4" style={{float:"center",margin:"auto"}}>© 2021 Bağımsız Herbalife Üyesi</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-center text-white">
              <p className="mt-4" style={{float:"right",marginRight:"3rem"}}>© 2021 Se<strong>B</strong>er Tech</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 footer-alt2 p-3"></div>
    </div>
  );
}

export default Footer;
