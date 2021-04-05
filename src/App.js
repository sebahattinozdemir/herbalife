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

function App() {
  return (
    <BrowserRouter>
      <div className="app w-100">

        <Menu />
       
       <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/magaza" component={Magaza} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/vucut-kitle-endeksi" component={KitleEndeks} />
            <Route exact path="/hakkimizda" component={Hakkimizda} />
            <Route exact path="/iletisim" component={Iletisim} />
       </Switch>
       
        

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
