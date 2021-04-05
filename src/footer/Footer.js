import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-100">
      <div className="container">
        <hr />
        <div className="row p-3">
          <div className="col-4">
            <p
              className="font-weight-bold text-dark"
              style={{ fontSize: "large" }}
            >
              Hakkımızda
            </p>
            <p className="text-dark">
              1980’de kurulan Herbalife Nutrition, günümüzde 8.000 aşkın
              çalışanıyla 90’dan fazla ülkede faaliyet göstermektedir.
            </p>
          </div>
          <div className="col-4 p-1">
            <p
              className="font-weight-bold text-dark"
              style={{ fontSize: "large" }}
            >
              One Cikan Kategoriler
            </p>
            <ul className="list-group">
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec'}}>
                <Link className="text-decoration-none btn-link" to="/">
                  Sporcu Beslenmesi
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Shaker / Suluklar
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Kisisel Bakim Urunleri
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Atistirmaliklar
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <p
              className="font-weight-bold text-dark"
              style={{ fontSize: "large" }}
            >
              Bilgilendirme
            </p>

            <ul className="list-group">
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec'}}>
                <Link className="text-decoration-none btn-link" to="/">
                  Mesafali Satis Sozlesmesi
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Gizlilik Politikasi
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Sik Sorulan Sorular
                </Link>
              </li>
              <li style={{ listStyleType: "none",borderBottom:'1px solid #ececec' }}>
                <Link className="text-decoration-none btn-link" to="/">
                  Hakkimizda
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="w-100 footer-alt p-4">
        <div className="w-100">
          <div className="row">
            <div className="col-4 text-white">
              <img
                className="img-fluid"
                src="https://herbaldamla.com/wp-content/uploads/2020/11/herbalife-logo-beyaz.png"
              />
            </div>
            <div className="col-4 text-center text-white">
              <p className="mt-4">© 2021 Bağımsız Herbalife Üyesi</p>
            </div>

            <div className="col-4 text-center text-white">
              <p className="mt-4">© 2021 SEBERTECH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 footer-alt2 p-3"></div>
    </div>
  );
}

export default Footer;
