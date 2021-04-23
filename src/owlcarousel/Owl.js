import React from 'react'
import './Owl.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import i1 from '../images/cin1.jpg';
import i2 from '../images/cin2.jpg';
import i3 from '../images/cin3.jpg';
import i4 from '../images/cin4.jpg';
import { NavigateBeforeSharp } from '@material-ui/icons';

import Sepet from '@material-ui/icons/AddShoppingCart';

import Ürün from "../ürün-component/Ürün.js";

//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    dots:2,
    autoplay: true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 4,
        }
    },
  };




export default function Owl() {
    
    
    return (
        
       
        <OwlCarousel className="owl-theme owl-roof" {...options}>

            <div className="item owl-slider">
                <Ürün 
                   /* ürünün_resmi,ürünün_kategorisi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı */
                    ürünün_resmi={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                    ürünün_ismi="Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)"
                    ürünün_ilk_fiyatı="148,42₺"
                    ürünün_son_fiyatı="89,99₺"

                />
               
            </div>
            <div className="item owl-slider">
                <Ürün 
                   /* ürünün_resmi,ürünün_kategorisi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı */
                    ürünün_resmi={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                    ürünün_ismi="Aloe Özlü Rahatlatıcı Yüz Temizleme Jeli 150 ml"
                    ürünün_ilk_fiyatı="148,42₺"
                    ürünün_son_fiyatı="89,99₺"

                />
            </div>
            <div className="item owl-slider">
                <Ürün 
                   /* ürünün_resmi,ürünün_kategorisi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı */
                    ürünün_resmi={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                    ürünün_ismi="Besleyici Shake Karışımı Formül 1 (Ahududu ve Beyaz Çikolata Aromalı)"
                    ürünün_ilk_fiyatı="148,42₺"
                    ürünün_son_fiyatı="89,99₺"

                />
               
            </div>
            <div className="item owl-slider">
                <Ürün 
                   /* ürünün_resmi,ürünün_kategorisi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı */
                    ürünün_resmi={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                    ürünün_ismi="Besleyici Shake Karışımı Formül 1 "
                    ürünün_ilk_fiyatı="148,42₺"
                    ürünün_son_fiyatı="89,99₺"

                />
            </div>
            
            
           
        </OwlCarousel>

        
      
    )
}

