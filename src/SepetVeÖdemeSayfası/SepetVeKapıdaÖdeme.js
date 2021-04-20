import React from 'react'
import KapıdaÖdeme from "../kapıda_ödeme_formu/Kayıt.js";

export default function SepetVeKapıdaÖdeme() {
    return (
        <div className="row sepetVeKapıdaÖdemeSayfası" style={{margin:"auto",padding:"1%",height:"auto"}}>
                        
                <div className="col-md-6 col-sm-12 col-12 siparişToplamFiyatı" style={{padding:"0.5rem"}}>
                        <KapıdaÖdeme />
                
                </div>

                <div className="col-md-6 col-sm-12 col-12 kapıdaÖdemeForm" style={{padding:"0.5rem"}}>
                        <KapıdaÖdeme />
                        
                </div>
</div>
    )
}
