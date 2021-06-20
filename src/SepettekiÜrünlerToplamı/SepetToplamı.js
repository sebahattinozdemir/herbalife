import React, { useState } from "react";
import { Button } from 'primereact/button';

import { bindActionCreators } from 'redux';
import * as cartActions from "./../redux/actions/cartActions";
import { connect } from 'react-redux';

function SepetToplamı(props) {


  const [miktar, setMiktar] = useState('')
 

 const urunuSepettenKaldir = (product)=>{ 
  props.actions.removeFromCart(product)
 }
  
  const arttır = (product)=>{
  
    props.actions.addQuantityToProduct(product)
  }

  const azalt = (product)=>{
    props.actions.decreaseQuantityToProduct(product)
  }

    return (
        <div className="container" style={{backgroundColor:"white",borderRadius:"0.5rem"}}>
            <h3>SEPET</h3>
            <br/>
                <table class="table caption-top">
                    <caption></caption>
                    <thead>
                        <tr>
                        <th scope="col-1">#</th>
                        <th scope="col-4">Ürün</th>
                        <th scope="col-2">Fiyat</th>
                        <th scope="col-3">Miktar</th>
                        <th scope="col-2">Ara Toplam</th>
                        </tr>
                    </thead>
                    
                        

                        
                         {props.cart.map((cartItem,index)=>(
                            
                        <tbody key={index}>

                            <tr>
                                <th scope="row"><Button label="x" onClick={()=>urunuSepettenKaldir(cartItem)} className="p-button-text p-button-rounded p-button-danger" /></th>
                        
                                <td>    
                                
                                <img src={cartItem.product.urununResmi} style={{width:"5rem",height:"5rem",marginTop:"-0.5rem"}}/>
                                
                                <p style={{fontSize:"small"}}>{cartItem.product.urunAdi}</p>

                                </td>
                                <td style={{marginTop:"1rem"}}>{cartItem.product.urunFiyati}₺</td>
                                <td style={{marginTop:"1rem"}}>
                                <div style={{display:"inline",float:"left"}}>
                                    <button className="btn btn-light ürünacıklama_azalt" onClick={()=>azalt(cartItem)} style={{fontSize:"x-large"}} >-</button>
                                    <span  style={{marginLeft:".5rem",marginRight:".5rem",fontSize:"medium"}}>{cartItem.product.miktar}</span>
                                    <button className="btn btn-light ürünacıklama_arttır" onClick={()=>arttır(cartItem)} style={{fontSize:"x-large",margin:"auto"}}>+
                                    </button>    
                                        
                                </div>
                                </td>
                                <td>{(cartItem.product.urunFiyati)*(cartItem.product.miktar)}₺</td>
                            </tr>
                        </tbody>
                                  
                        ))}
                        

                       
                       
                        
                       
                    
                </table>
        </div>
   
    )
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      addQuantityToProduct: bindActionCreators(cartActions.addQuantityToProduct, dispatch),
      decreaseQuantityToProduct: bindActionCreators(cartActions.decreaseQuantityToProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SepetToplamı);
