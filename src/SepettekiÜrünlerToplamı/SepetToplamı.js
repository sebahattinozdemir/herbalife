import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "./SepetToplamı.css";
import { bindActionCreators } from "redux";
import * as cartActions from "./../redux/actions/cartActions";
import { connect } from "react-redux";
import useDocumentTitle from "../useDocumentTitle";


function SepetToplamı(props) {
  const [miktar, setMiktar] = useState("");

  const urunuSepettenKaldir = (product) => {
    props.actions.removeFromCart(product);
   
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const arttır = (product) => {
    props.actions.addQuantityToProduct(product);
    calculateTotalPrice()
  };

  const azalt = (product) => {
    props.actions.decreaseQuantityToProduct(product);
    calculateTotalPrice()
  };


  const calculateTotalPrice = ()=>{

   
    let sum = 0;
    props.cart.forEach(cartItem => {
      console.log(cartItem.product)
      sum += cartItem.product.urunFiyati * cartItem.product.miktar   
    });

    setTimeout(() => {
      setTotalPrice(sum)
    }, 500);
    
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [])

  useDocumentTitle('Sepet - Herbalife')
  return (

    <div
      className="container"
      style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
    >
     
      <br />
      <table class="table caption-top">
        <caption></caption>
        <thead>
          <tr>
            <th scope="col-1" className="tabloRow">#</th>
            <th scope="col-5" className="tabloUrun">Ürün</th>
            <th scope="col-2" className="tabloFiyat">Fiyat</th>
            <th scope="col-" className="tabloMiktar">Miktar</th>
            <th scope="col-2" className="tabloAraToplam">Ara Toplam</th>
          </tr>
        </thead>

        {props.cart.map((cartItem, index) => (
          <tbody key={index}>
            <tr>
              

              <td>
                <Button
                  label="x"
                  onClick={() => urunuSepettenKaldir(cartItem)}
                  className="p-button-text p-button-rounded p-button-danger sepettenCikar"
                  style={{float:"left",marginLeft:"-1rem"}}
                />
                <img
                  className="sepetUrunResmi"
                  src={cartItem.product.urununResmi}
                  style={{
                    width: "5rem",
                    height: "5rem",
                    marginTop: "-0.5rem",
                    float:"left",
                  }}
                />

                
              </td>
              <td>
                  <p className="tabloIciUrunİsmi" style={{ fontSize: "small",float:"left" }}>{cartItem.product.urunAdi}</p>
                  <br/>
                  <p className="miktarXfiyat"><b>{cartItem.product.miktar} x {cartItem.product.urunFiyati}₺ = {cartItem.product.urunFiyati * cartItem.product.miktar}₺</b> </p>

              </td>
              <td className="tabloFiyat" style={{  }}>
                {cartItem.product.urunFiyati}₺
              </td>
              <td style={{ marginTop: "1rem" }}>
                <div className="miktarArttirAzaltDiv" style={{ display: "inline"}}>
                  <button
                    className="btn btn-light ürünacıklama_azalt"
                    onClick={() => azalt(cartItem)}
                    style={{ fontSize: "x-large" }}
                  >
                    -
                  </button>
                  <span
                   className="butonArasiMiktar"
                    style={{
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                      fontSize: "medium",
                    }}
                  >
                    {cartItem.product.miktar}
                  </span>
                  <button
                    className="btn btn-light ürünacıklama_arttır"
                    onClick={() => arttır(cartItem)}
                    style={{ fontSize: "x-large", margin: "auto" }}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="tabloAraToplam">{cartItem.product.urunFiyati * cartItem.product.miktar}₺</td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="mb-4 pb-4">
        <b className="sepetToplamTutari" style={{ fontSize: "large" }}>Sepet Toplamı = {totalPrice} ₺</b>
      </div>
    </div>
   
  );
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
      addQuantityToProduct: bindActionCreators(
        cartActions.addQuantityToProduct,
        dispatch
      ),
      decreaseQuantityToProduct: bindActionCreators(
        cartActions.decreaseQuantityToProduct,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SepetToplamı);
