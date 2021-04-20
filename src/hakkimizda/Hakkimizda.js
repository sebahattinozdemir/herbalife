import biz from "./whoweare.jpg"; 
import "./Hakkimizda.css";
import React from "react";
import { Helmet } from 'react-helmet';
import useDocumentTitle from '../useDocumentTitle';


function Hakkimizda() {
  useDocumentTitle('Hakkımızda - Herbalife')
      
  return (
    
      
    
    <div className="container">
      
      <h3 className="mt-4">HAKKIMIZDA</h3>

      <div className="row mt-5">
        <div className="col-lg-4 col-xs-12">
          

          <img
            className="w-100 img-fluid hakkimizda-resim" style={{height:"20rem",border:"2px solid #7ac043"}}
            src={biz}
          />
        </div>

        <div className="col-lg-8 col-xs-12 hakkimizda-harita">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5279528.782899717!2d31.69481252989785!3d39.29129111278404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zdMO8cmtpeWU!5e0!3m2!1str!2str!4v1618183691786!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"20rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",paddingBottom:"0.5rem",paddingTop:"0.5rem",border:"2px solid #7ac043"}}> </iframe>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 col-xs-12">
          <h3 className="bizkimiz">BİZ KİMİZ</h3>
        </div>
        <div className="col-lg-8 col-xs-12">
          <p>
            Öğün yerine geçen shake’ler, takviye edici gıdalar ve cilt bakım
            ürünlerinde uzman.
          </p>
          <br />
          <p>
            Her gün, dünya genelinde 4 milyondan fazla Herbalife Nutrition shake
            tüketiliyor.
          </p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-4 col-xs-12">
          <h3>NASIL ÇALIŞIYORUZ</h3>
        </div>
        <div className="col-lg-8 col-xs-12">
          <p>Müşterilerimize distribütör ağımızla ulaşıyoruz.</p>
          <br />
          <p style={{textAlign:"justify"}}>
            Bağımsız Distribütörlerimizin sunduğu doğrudan iletişime dayalı
            kişiye özel deneyim, amacımızı gerçekleştirmemiz açısından kritik
            önem taşır. Ürün satışından çok daha fazlasını ifade eden bu
            deneyim, müşterilerimize değişmek için ihtiyaç duydukları
            motivasyonu ve kişisel desteği sunar
          </p>
        </div>
      </div>

      <div className="container">
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <span
                className="card-link font-weight-bold"
                style={{ color: "#7ac043"}}
                data-toggle="collapse"
              >
                NEDEN BİZİM ÜRÜNLERİMİZ
              </span>
            </div>
            <div className="collapse show" data-parent="#accordion">
              <div className="card-body" style={{textAlign:"justify"}}>
                Dünyanın önde gelen uzmanlarını bir araya getiren Herbalife
                Nutrition Enstitüsü, klinik araştırmalar ve eğitim faaliyetleri
                aracılığıyla beslenme alanında ürün geliştirilmesini
                desteklemekle görevlidir.
              </div>
            </div>
          </div>
          <br/>
          <div className="card">
            <div className="card-header">
              <span
                style={{ color: "#7ac043" }}
                className="collapsed card-link font-weight-bold"
                data-toggle="collapse"
              >
                HAYATA DOKUNMAK
              </span>
            </div>
            <div className="collapse show" data-parent="#accordion">
              <div className="card-body" style={{textAlign:"justify"}}>
               Bu bakımdan, kar amacı gütmeyen bir kuruluş
                olan Herbalife Nutrition Vakfı tarafından iyi beslenmeyi ve
                aktif yaşam tarzını desteklemek için düzenlenen programlar
                kapsamında gönüllü çalışmalarda bulunmakta ve bağışlarıyla katkı
                yapmaktadırlar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
