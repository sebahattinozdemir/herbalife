import ilgiliürün from "./ilgi.png";
import Sepet from '@material-ui/icons/AddShoppingCart';
import "./İlgi.css";
import React from 'react'

export default function İlgi() {
    return (
    
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 ilgili">
                   
                        <div className="card-body ürün-div">
                            <img src={ilgiliürün} className="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a href=""><Sepet className="sepet"/></a>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                           
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 ilgili">
                   
                        <div className="card-body">
                            <img src={ilgiliürün} className="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a href=""><Sepet className="sepet"/></a>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card h-100 ilgili">
                   
                        <div className="card-body">
                            <img src={ilgiliürün} className="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a href=""><Sepet className="sepet"/></a>
                            <a className="ilgili-ürün-ismi" href="">Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)</a>
                            <div className="ilgili-ürün-fiyatlar">
                                <p className="ilgili-ürün-ilk-fiyat">148,42₺</p>
                                <p className="ilgili-ürün-son-fiyat">89,99₺</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 ilgili">
                   
                        <div className="card-body">
                            <img src={ilgiliürün} className="card-img-top ilgiliürünresmi" alt={ilgiliürün}></img>
                            <p className="ilgili-ürün-indirim" style={{}}>İndirim!</p>
                            <a href=""><Sepet className="sepet"/></a>
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

