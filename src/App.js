import "./App.css";
import React, { useState } from "react";

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

import useDocumentTitle from "./useDocumentTitle";
import { SnackbarProvider } from "notistack";



function App() {
  useDocumentTitle("Herbalerya - Herbalife");
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <div className="app w-100">
          <Menu />

          <Switch>
            <div style={{minHeight:"100vh"}} className="mvh-100">
              <Route exact path="/" component={MainPage} />
              <Route exact path="/magaza" component={Magaza} />
              <Route exact path="/blog" component={Blog} />
              <Route
                exact
                path="/vucut-kitle-endeksi"
                component={KitleEndeks}
              />
              <Route exact path="/hakkimizda" component={Hakkimizda} />
              <Route exact path="/iletisim" component={Iletisim} />
              <Route
                exact
                path="/mesafeli-satis-sozlesmesi"
                component={Sozlesme}
              />
              <Route exact path="/gizlilik-politikasi" component={Gizlilik} />
              <Route exact path="/sik-sorulan-sorular" component={Sorular} />
            </div>
          </Switch>

          <Route exact path="/admin" component={Admin} />

          <Footer />
        </div>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
