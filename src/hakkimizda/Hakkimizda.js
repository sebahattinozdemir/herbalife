import React from "react";

function Hakkimizda() {
  return (
    <div className="container">
      <h3 className="mt-4">HAKKIMIZDA</h3>

      <div className="row mt-5">
        <div className="col-4">
          <img
            className="w-100 h-auto img-fluid"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div className="col-8">
          <iframe
            src="https://yandex.com.tr/map-widget/v1/-/CCUMqNEVoB"
            className="yandexharita"
            style={{
              width: "100%",
              height: "100%",
              frameBorder: "0",
              allowFullScreen: "",
              ariaHidden: "false",
              tabIndex: "0",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          ></iframe>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <h3>BİZ KİMİZ</h3>
        </div>
        <div className="col-8">
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
        <div className="col-4">
          <h3>NASIL ÇALIŞIYORUZ</h3>
        </div>
        <div className="col-8">
          <p>Müşterilerimize distribütör ağımızla ulaşıyoruz.</p>
          <br />
          <p>
            Bağımsız Distribütörlerimizin sunduğu doğrudan iletişime dayalı
            kişiye özel deneyim, amacımızı gerçekleştirmemiz açısından kritik
            önem taşır. Ürün satışından çok daha fazlasını ifade eden bu
            deneyim, müşterilerimize değişmek için ihtiyaç duydukları
            motivasyonu ve kişisel desteği sunar
          </p>
        </div>
      </div>

      <div class="container">
        <div id="accordion">
          <div class="card">
            <div class="card-header">
              <span
                class="card-link font-weight-bold"
                style={{ color: "#7ac043" }}
                data-toggle="collapse"
              >
                NEDEN BIZIM URUNLERIMIZ
              </span>
            </div>
            <div class="collapse show" data-parent="#accordion">
              <div class="card-body">
                Dünyanın önde gelen uzmanlarını bir araya getiren Herbalife
                Nutrition Enstitüsü, klinik araştırmalar ve eğitim faaliyetleri
                aracılığıyla beslenme alanında ürün geliştirilmesini
                desteklemekle görevlidir.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <span
                style={{ color: "#7ac043" }}
                class="collapsed card-link font-weight-bold"
                data-toggle="collapse"
              >
                HAYATA DOKUNMAK
              </span>
            </div>
            <div class="collapse show" data-parent="#accordion">
              <div class="card-body">
                Distribütörlerimiz ve çalışanlarımız, topluma geri vermek için
                gayret gösterirler. Bu bakımdan, kar amacı gütmeyen bir kuruluş
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
