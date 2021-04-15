import ilgiliürün from "./ilgi.png";
import "./İlgi.css";
import React from 'react'

export default function İlgi() {
    return (
    
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100 ilgili">
                   
                        <div class="card-body">
                            <img src={ilgiliürün} class="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                           
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 ilgili">
                   
                        <div class="card-body">
                            <img src={ilgiliürün} class="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100 ilgili">
                   
                        <div class="card-body">
                            <img src={ilgiliürün} class="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100 ilgili">
                   
                        <div class="card-body">
                            <img src={ilgiliürün} class="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>
    )
}

