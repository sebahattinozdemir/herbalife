import "./KitleEndeks.css";
import İlgiliÜrün from "../ilginizi_cekebilecek_urunler/İlgi";
import React, { useEffect, useState } from "react";
import useDocumentTitle from "../useDocumentTitle";
import Header from "../headerComponent/Header.js";
import SiparisOzet from "../store/SiparisOzet";

function KitleEndeks() {
  useDocumentTitle('Vücut Kitle İndeksi - Herbalife')

  const [orderList,setOrderList]=useState(SiparisOzet.UrunSiparisListesi)
 

  const [kilo, setKilo] = useState('')
  const [boy, setBoy] = useState('')
  const [indeks, setİndeks] = useState('')
  const [sonuc, setSonuc] = useState('')


  
  const sifirla = (e)=>{
    e.preventDefault();
    setKilo("")
    setBoy("")
    setİndeks("")
    setSonuc("")
    orderList.forEach(element => {
      console.log(element.urunAdi);
      
  });
  }


  const calculateBmi = (e)=>{
    
    e.preventDefault();
    
    setİndeks((kilo/((boy/100)*(boy/100))).toFixed(2));
    
    setTimeout(() => {
      if((kilo/((boy/100)*(boy/100)))<17.5 && (kilo/((boy/100)*(boy/100)))>0){
        setSonuc("Aşırı Zayıf");
      }
      else if((kilo/((boy/100)*(boy/100)))>=17.5 && (kilo/((boy/100)*(boy/100)))<19.1){
        setSonuc("Zayıf");
      }
      else if((kilo/((boy/100)*(boy/100)))>=19.1 && (kilo/((boy/100)*(boy/100)))<25.8){
        setSonuc("Normal (ideal kilo)");
      }
      else if((kilo/((boy/100)*(boy/100)))>=25.8 && (kilo/((boy/100)*(boy/100)))<27.3){
        setSonuc("Biraz kilo fazlası");
      }
      else if((kilo/((boy/100)*(boy/100)))>=27.3 && (kilo/((boy/100)*(boy/100)))<32.3){
        setSonuc("Fazla kilo");
      }
      else if((kilo/((boy/100)*(boy/100)))>=32.3 && (kilo/((boy/100)*(boy/100)))<34.9){
        setSonuc("Çok fazla kilolu");
      }
      else {
        console.log(indeks);
        setSonuc("Süper aşırı kilolu");
        
      }
      
    }, 500);
  
    
  }

  
    

  return (
    <div>
        <Header page_title="Vücut Kitle Endeksi"/>

    <div className="container border border-5">
      <div className="row">

        
        <div className="col-md-6 col-sm-6 col-12">
       
          <div className="jumbotron">
            <form>
              <div className="form-group">
                <label className="font-weight-bold" for="kilo">
                  Kilonuz(kg)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="kilo"
                  placeholder="Kilonuzu Yazin - ornek: 85"
                  value={kilo}
                  onChange={event => setKilo(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="font-weight-bold" for="boy">
                  Boyunuz(cm)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="boy"
                  placeholder="Boyunuzu Girin Yazin - ornek: 177"
                  value={boy}
                  onChange={event => setBoy(event.target.value)}
                />
              </div>

    

              <button className="btn btn-success" style={{width:"5rem"}} onClick={calculateBmi}>
                Hesapla
              </button>

              <div className="form-group mt-3">
                <label className="font-weight-bold" for="text">
                  Beden Kitle Endeksiniz; 
                </label>

                <input className="col-12" type="text" value={indeks} style={{borderRadius:"0.2rem",height:"2.5rem",backgroundColor:"#FDF8CD",border:"3px solid #E8DB6C"}}>
                     
                </input>
                
              </div>

              <div className="form-group">
                <label className="font-weight-bold" for="text">
                  Bu sonuca göre;
                </label>

                <input className="col-12" type="text" value={sonuc} style={{borderRadius:"0.2rem",height:"2.5rem",backgroundColor:"#FDF8CD",border:"3px solid #E8DB6C"}}>
                     
                </input>

      
              </div>

              <button className="btn btn-success" style={{width:"5rem"}} onClick={sifirla}>
                Sıfırla
              </button>

            </form>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
          <div className="mt-5">
            <p className="font-weight-bold " style={{fontSize:"large"}}>Vücut Kitle İndeksi değerleri nasıl yorumlanıyor?</p>
            <p className="font-weight-light" style={{fontSize:"large"}}>
             Vücut Kitle İndeksinize göre aşağıdaki tablodan vücudunuzun genel durumunu hakkında bilgi sahibi olabilirsiniz.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Yetişkinler İçin</th>
                  <th scope="col">KADIN (KG/M2)	</th>
                  <th scope="col">ERKEK (KG/M2)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anoreksi, aşırı zayıf</td>
                  <td>17.5 ve daha az</td>
                  <td></td>
                </tr>

                <tr>
                  <td>Zayıf	</td>
                  <td>17.5 – 19.1</td>
                  <td>17.5 – 20.7</td>
                </tr>

                <tr>
                  <td>Normal (ideal kilo)		</td>
                  <td>19.1 – 25.8</td>
                  <td>20.7 – 26.4</td>
                </tr>
                <tr>
                  <td>Biraz kilo fazlası		</td>
                  <td>25.8 – 27.3</td>
                  <td>26.4 – 27.8</td>
                </tr>
                <tr>
                  <td>Fazla kilo	</td>
                  <td>27.3 – 32.3</td>
                  <td>27.8 – 31.1</td>
                </tr>
                <tr>
                  <td>Çok fazla kilolu	</td>
                  <td>32.3 – 34.9</td>
                  <td>31.1 – 34.9</td>
                </tr>
                <tr>
                  <td>Sağlık açısından yüksek risk	</td>
                  <td>	35 – 40</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hastalıklı şekilde aşırı kilolu		</td>
                  <td>40 – 50</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Süper aşırı kilolu	</td>
                  <td>50 – 60</td>
                  <td></td>
                </tr>
             

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row mx-auto">

          <p className="font-weight-bold" style={{fontSize:'x-large'}}>İLGİNİZİ ÇEKEBİLECEK ÜRÜNLER</p>

        <div className="col-12 mb-2">
             <İlgiliÜrün/>
        </div>
        
          
      </div>

    </div>
    </div>
  );
}

export default KitleEndeks;
