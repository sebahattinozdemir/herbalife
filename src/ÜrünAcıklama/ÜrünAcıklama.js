import "./ÜrünAcıklama.css";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import ÜrünResmi  from "./ürün_acıklama_resmi.png"; 
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function ÜrünAcıklama() {
 /*   const [miktar, setMiktar] = useState('')
    setMiktar(1);
    


  
  const arttır = (e)=>{
    e.preventDefault();
    setMiktar(miktar);
    console.log("Miktar: "+miktar);
  }
  const azalt = (e)=>{
    e.preventDefault();
    setMiktar(miktar-1);
    console.log("Miktar: "+miktar);
  }
    
*/


    return (
        
        <div className="row ürünacıklama_tepe">
            <div className="col-lg-6 col-xs-12 ürünacıklama_sol_taraf">
                
                <h4 className="ürünacıklama_indirim">İndirim!</h4>
                <img src={ÜrünResmi} className="ürünacıklama_resmi"></img>
                <ZoomOutMapIcon className="ürünacıklama_zoom" style={{width:"2.5rem",height:"2.5rem"}} title="Zoom" />
            </div>

            <div className="col-lg-6 col-xs-12 ürünacıklama_sag_taraf">
                <div class="container" >
                    <h3>Besleyici Shake Karışımı Formül 1 (Vanilya Aromalı)</h3>
                    <hr/>
                    <div className="" style={{display:"inline"}}>
                        <p className="ürünacıklama_ilk_fiyat">161,78₺</p>
                        <p className="ürünacıklama_indirimli_fiyat">99,99₺</p>
                    </div>
                    <br/>
                    <br/>
                    <div style={{marginTop:"10rem",display:"inline",height:"2rem"}}>
                        <div style={{display:"inline",float:"left"}}>
                            <button className="btn btn-light ürünacıklama_azalt" style={{width:"3rem",height:"3rem",fontSize:"x-large"}} >-</button>
                            
                            <label type="text"   style={{width:"2rem",height:"2rem",  textAlign:"center",fontSize:"large"}}>1</label>
                            <button className="btn btn-light ürünacıklama_arttır" style={{width:"3rem",height:"3rem",fontSize:"x-large"}} >+</button>
                            &nbsp;
                            &nbsp;
                            <button className="btn btn-success" style={{width:"8rem",height:"3rem",fontSize:"medium",padding:"auto"}}>Sepete Ekle</button>
                        </div>

                    </div>
                
                
                    <div className="whatsappMesajıGönder" style={{marginTop:"5rem"}}>
                                    <a href="https://wa.me/+905464753883" target="_blank" style={{ }}>
                                <WhatsAppIcon className="icon" style={{fontSize:"x-large",color:"#26F91E"}}/>
                                    &nbsp;&nbsp;<span style={{color:"black"}}>Whatsapp Mesajı Gönder</span>
                                </a>
                        
                    </div>
                    <br/>
                    <div className="siziArayalım">
                        
                            
                                <a href="tel: +905464753883" target="_blank" style={{  }}>
                                    <SettingsPhoneIcon className="icon" style={{fontSize:"x-large",color:"blue"}} />
                                    &nbsp;&nbsp;<span style={{color:"black"}}>Sizi arayalım!</span>
                                </a>
                            
                    </div>
                    <br/>
                    <hr style={{marginBottom:"2px"}}/>
                    <p style={{fontSize:"small",marginBottom:"2px"}}>Stok Kodu: 5561</p>
                    <hr style={{style:"dotted",marginBottom:"2px",marginTop:"-2px"}}/>
                    <p style={{fontSize:"small"}}>Kategori: Kişisel Bakım</p>
                </div>
                <br/>
                <br/>
                
               
              
            </div>
            <div className="col-lg-12 col-xs-12 ürünacıklama_alt_taraf">
                <hr/>
                <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one" style={{backgroundColor:"#F4F5EC",borderRadius:"0.5rem"}}>Açıklama</Tab>
          &nbsp;
          <Tab tabFor="two" style={{backgroundColor:"#F4F5EC",borderRadius:"0.5rem"}}>Ek Bilgi</Tab>
         
        </TabList>
        <TabPanel tabId="one" style={{margin:"2rem"}}>
          <p style={{textAlign:"justify"}}>Protein ve temel besinlerin birleşiminden oluşan lezzetli bir öğündür.
Formül 1, aralarında B vitaminleri, C Vitamini, kalsiyum ve demir bulunan 22 vitamin ve mineral içerir.
Kilo kontrolü için, günde iki öğün bu lezzetli Shake’i tercih edip ve bir öğün sağlıklı yemek yiyebilirsiniz.
İdeal kilonuzu koruyabilmek için günde bir öğün bu lezzetli Shake’i tercih edip ve iki öğün sağlıklı yemek yiyebilirsiniz.
</p>
        </TabPanel>
        <TabPanel tabId="two" style={{margin:"2rem"}}>
          <p style={{textAlign:"justify"}}>SHAKE AROMASI	Ahududu ve Beyaz Çikolatalı, Çikolatalı, Fındıklı, Vanilyalı</p>
        </TabPanel>
        
      </Tabs>
               
            </div>
           
            <br/>
            <br/>
            
                
        </div>

       
    )
}
