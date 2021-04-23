import React, { Component } from 'react'
import Sepet from '@material-ui/icons/AddShoppingCart';
import "./Ürün.css";


export default class Ürün extends Component{
        render(){
        //Destructing
        const {ürünün_resmi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı}=this.props;
        return (

            <div class="container">
                <img src={ürünün_resmi} class="ürünün_resmi" alt=""></img>
                <p className="ürün_indirim_etiketi">İndirim!</p>
                <a href=""><Sepet className="sepet_ikonu"/></a>
                <br/>
                <div style={{height:"auto"}}>
                    <a className="ürünün_ismi" href={ürünün_linki}>{ürünün_ismi}</a>
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
