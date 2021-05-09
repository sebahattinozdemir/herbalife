import "./App.css";
import React, { useEffect, useState } from "react";
import { CookiesProvider } from 'react-cookie';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import MainPage from "./anasayfa/MainPage";
import Magaza from "./tum urunler/Magaza";
import KitleEndeks from "./kitle-endeksi/KitleEndeks";
import Hakkimizda from "./hakkimizda/Hakkimizda";
import Iletisim from "./iletisim/Iletisim";
import Blog from "./blog/Blog";
import Sozlesme from "./satis-sozlesmesi/Sozlesme";
import Gizlilik from "./gizlilik/Gizlilik";
import Sorular from "./sorular/Sorular";
import Admin from "./admin/Admin";
import SiparişToplamÖdeme from "./SepetVeÖdemeSayfası/SepetVeKapıdaÖdeme";

import useDocumentTitle from "./useDocumentTitle";
import { SnackbarProvider } from "notistack";
import ÜrünAcıklama from "./ÜrünAcıklama/ÜrünAcıklama";

import {db} from "./firebase";

function App() {
  useDocumentTitle("Herbalalerya - Herbalife");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    getProducts();
  }, []);

  // tum urunler
  const getProducts = () => {
    setProducts([]);
    db.collection("products")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };
  

  return (
    <CookiesProvider>

    <SnackbarProvider>
      <BrowserRouter>
        <div className="app w-100">
          <Menu />

          <Switch>
         
              <Route exact path="/" component={MainPage} />
              <Route exact path="/magaza" component={Magaza} />
              <Route exact path="/magaza/kilo-yonetimi" component={Magaza} />
              <Route exact path="/magaza/kisisel-bakim" component={Magaza} />
              <Route exact path="/magaza/ozel-setler" component={Magaza} />
              <Route exact path="/magaza/takviye-edici-gidalar" component={Magaza} />
              <Route exact path="/magaza/tanitim-urunleri" component={Magaza} />
              <Route exact path="/blog" component={Blog} />
              <Route
                exact
                path="/vucut-kitle-endeksi"
                component={KitleEndeks}
              />


{products.map((product, index) => (
              <Route
                exact
                path={"/magaza/" + product.urunAdi.trim().replaceAll(" ", "-")
                .replaceAll("ş", "s")
                .replaceAll("ç", "c")
                .replaceAll("ğ", "g")
                .replaceAll("ı", "i")
                .replaceAll("ö", "o")
                .replaceAll("ü", "u")
                .replaceAll("Ş", "S")
                .replaceAll("Ç", "C")
                .replaceAll("Ğ", "G")
                .replaceAll("İ", "I")
                .replaceAll("Ü", "U")
                .replaceAll("Ö", "O")
                .replaceAll("(", "")
                .replaceAll(")", "")}
                component={ÜrünAcıklama}
              />
            ))}

              <Route exact path="/hakkimizda" component={Hakkimizda} />
              <Route exact path="/iletisim" component={Iletisim} />
              <Route
                exact
                path="/mesafeli-satis-sozlesmesi"
                component={Sozlesme}
              />
              <Route exact path="/gizlilik-politikasi" component={Gizlilik} />
              <Route exact path="/sik-sorulan-sorular" component={Sorular} />

              <Route exact path="/siparis-toplami-odeme" component={SiparişToplamÖdeme}/>
           
          </Switch>

          <Route exact path="/admin" component={Admin} />

          <Footer />
        </div>
      </BrowserRouter>
    </SnackbarProvider>
    </CookiesProvider>

  );
}

export default App;
