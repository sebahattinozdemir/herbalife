import React, { useState } from "react";
import { Button } from 'primereact/button';
import SiparisOzet from "../store/SiparisOzet";
import { useCookies } from "react-cookie";


export default function SepetToplamı() {
    const [orderList,setOrderList]=useState(SiparisOzet.UrunSiparisListesi)

  const [miktar, setMiktar] = useState('')
  const [cookies, setCookie] = useCookies(['orderList']);

 const urunuSepettenKaldir = ()=>{
    
    cookies.orderList.splice(2,1);
    console.log(cookies.orderList);
    cookies.orderList.pop();
    
 }
  
  const arttır = (e)=>{
    e.preventDefault();
    setMiktar(miktar+1);
    if(miktar>8){
      setMiktar(9);
    }
    console.log(cookies.orderList);
   /* cookies.orderList.forEach(element => {
        console.log(element.urunAdi);
        
    }); */

   
  }

  const azalt = (e)=>{
    e.preventDefault();
    setMiktar(miktar-1);
    if(miktar<1){
      setMiktar(0);
    } 
    
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
                    
                        

                        
                        {cookies.orderList.map((order, index) => (
                            
                        <tbody key={index}>

                            <tr>
                                <th scope="row"><Button label="x" onClick={urunuSepettenKaldir} className="p-button-text p-button-rounded p-button-danger" /></th>
                        
                                <td>    
                                <img src={order.urununResmi}
                                    style={{width:"5rem",height:"5rem",marginTop:"-0.5rem"}}
                                ></img>
                                <a href="" style={{fontSize:"small"}}>{order.urunAdi}</a>

                                </td>
                                <td style={{marginTop:"1rem"}}>{order.urunFiyati}₺</td>
                                <td style={{marginTop:"1rem"}}>
                                <div style={{display:"inline",float:"left"}}>
                                    <button className="btn btn-light ürünacıklama_azalt" onClick={azalt} style={{fontSize:"x-large"}} >-</button>
                                    <span  style={{marginLeft:".5rem",marginRight:".5rem",fontSize:"medium"}}>{order.miktar}</span>
                                    <button className="btn btn-light ürünacıklama_arttır" onClick={arttır} style={{fontSize:"x-large",margin:"auto"}}>+
                                    </button>    
                                        
                                </div>
                                </td>
                                <td>{(order.urunFiyati)*(order.miktar)}₺</td>
                            </tr>
                        </tbody>
                                        //((order.urunFiyati).slice(0, -1))


                        ))}
                        

                       
                       
                        
                       
                    
                </table>
        </div>
   
    )
}
