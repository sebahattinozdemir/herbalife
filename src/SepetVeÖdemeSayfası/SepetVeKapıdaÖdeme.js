import React from 'react'
import KapıdaÖdeme from "../kapıda_ödeme_formu/Kayıt.js";
import SepetToplamı from "../SepettekiÜrünlerToplamı/SepetToplamı.js";
import { bindActionCreators } from 'redux';
import * as cartActions from "./../redux/actions/cartActions";
import { connect } from 'react-redux';
function SepetVeKapıdaÖdeme() {
    return (
        <div className="row sepetVeKapıdaÖdemeSayfası" style={{margin:"auto",padding:"1%",height:"auto"}}>
                        
                <div className="col-md-8 col-sm-12 col-12 siparişToplamFiyatı" style={{padding:"0.5rem"}}>
                        <SepetToplamı />
                
                </div>

                <div className="col-md-4 col-sm-12 col-12 kapıdaÖdemeForm" style={{padding:"0.5rem"}}>
                        <KapıdaÖdeme />
                        
                </div>
</div>
    )
}

function mapStateToProps(state) {
        return {
          cart: state.cartReducer,
        };
      }
      
export default connect(mapStateToProps)(SepetVeKapıdaÖdeme);
      
