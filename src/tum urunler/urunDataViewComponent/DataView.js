import React from "react";
import Ürün from "../../ürün-component/Ürün";

function DataView({products}) {
  return (
    <div className="row" style={{backgroundColor:"white"}}>


        {products.map(product=>{
            return(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6  border border-light">
                <Ürün
                  /* ürünün_resmi,ürünün_kategorisi,ürünün_ismi,ürünün_linki,ürünün_ilk_fiyatı,ürünün_son_fiyatı */
                  ürünün_resmi={
                    product.urunResmi
                  }
                  ürünün_ismi={product.urunAdi}
                  ürünün_ilk_fiyatı={product.urunFiyati + "₺"}
                  ürünün_son_fiyatı={product.urunIndirimliFiyati + "₺"}
                />
              </div>
        
            )
        })}
    
    </div>
  );
}

export default DataView;
