import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function SepetToplamı() {
  const [miktar, setMiktar] = useState(1)
 
  
  const arttır = (e)=>{
    e.preventDefault();
    setMiktar(miktar+1);
    if(miktar>8){
      setMiktar(9);
    }
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
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>    
                            <img src={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                                style={{width:"5rem",height:"5rem",marginTop:"-0.5rem"}}
                            ></img>
                            <a href="" style={{fontSize:"small"}}>Besleyici Shake Karışımı Formül 1 (Vanilya Aromalı)</a>

                        </td>
                        <td style={{marginTop:"1rem"}}>90₺</td>
                        <td style={{marginTop:"1rem"}}>
                            <div style={{display:"inline",float:"left"}}>
                                <button className="btn btn-light ürünacıklama_azalt" onClick={azalt} style={{fontSize:"x-large"}} >-</button>
                                <span  style={{marginLeft:".5rem",marginRight:".5rem",fontSize:"medium"}}>{miktar}</span>
                                <button className="btn btn-light ürünacıklama_arttır" onClick={arttır} style={{fontSize:"x-large",margin:"auto"}}>+
                                </button>    
                                    
                            </div>
                        </td>
                        <td>270₺</td>
                        </tr>

                        <tr>
                        <th scope="row">2</th>
                        <td>    
                            <img src={"https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"}
                                style={{width:"5rem",height:"5rem",marginTop:"-0.5rem"}}
                            ></img>
                            <a href="" style={{fontSize:"small"}}>Besleyici Shake Karışımı Formül 1 (Vanilya Aromalı)</a>

                        </td>
                        <td>90₺</td>
                        <td>
                            <div style={{display:"inline",float:"left"}}>
                                <button className="btn btn-light ürünacıklama_azalt" onClick={azalt} style={{fontSize:"x-large"}} >-</button>
                                <span  style={{marginLeft:".5rem",marginRight:".5rem",fontSize:"medium"}}>{miktar}</span>
                                <button className="btn btn-light ürünacıklama_arttır" onClick={arttır} style={{fontSize:"x-large",margin:"auto"}}>+
                                </button>    
                                    
                            </div>
                        </td>
                        <td>270₺</td>
                        </tr>
                        
                       
                    </tbody>
                </table>
        </div>
   
    )
}
