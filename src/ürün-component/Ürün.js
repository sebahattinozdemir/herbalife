import React, { Component } from 'react'
import Sepet from '@material-ui/icons/AddShoppingCart';
import "./Ürün.css";
import { Link } from 'react-router-dom';


export default class Ürün extends Component{
        render(){
        //Destructing
        const {ürünün_resmi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı,urun_aciklama,urun_ekbilgi,urun_kategori}=this.props;
        return (

            <div class="col-12">
                <img src={ürünün_resmi} class="ürünün_resmi" alt=""></img>
                <p className="ürün_indirim_etiketi">İndirim!</p>
                <a href=""><Sepet className="sepet_ikonu"/></a>
                <br/>
                <div style={{height:"auto"}}>
                    <Link
                      className="ürünün_ismi"
                      to=""
                      // eslint-disable-next-line react/jsx-no-duplicate-props
                      to={{
                        pathname: "/magaza/urun-aciklama",
                        state: this.props
                      }}
                    >
                      {ürünün_ismi}
                    </Link>
                </div>
            
                <br/>
                <div className="ürünlerin_fiyat_bilgileri">
                    <p className="ürünün_ilk_fiyatı">{ürünün_ilk_fiyatı}</p>
                    <p className="ürünün_son_fiyatı">{ürünün_son_fiyatı}</p>
                </div>
            </div> 


        

        )
    }

}
