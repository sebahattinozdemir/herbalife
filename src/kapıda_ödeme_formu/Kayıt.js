import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Kayıt.css";
import { bindActionCreators } from 'redux';
import * as cartActions from "./../redux/actions/cartActions";
import { connect } from 'react-redux';


// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class Kayıt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameAndSurname: "",
      cellphone: "",
      email: "",
      city:"",
      province:"",
      address: "",
      additionalNotes:"",
      
      formErrors: {
        nameAndSurname: "",
        cellphone: "",
        email: "",
        city:"",
        province:"",
        address: "",
        additionalNotes:"",
        
        
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { nameAndSurname,cellphone, email, city, province, address, additionalNotes} = this.state;

      // Set template params
      let templateParams = {
        nameAndSurname: nameAndSurname,
        cellphone: cellphone,
        email: email,
        city:city,
        province:province,
        address : address,
        additionalNotes:additionalNotes,
        siparisler: this.props.cart.map(cartItem=>{
          return {urunAdi:cartItem.product.urunAdi,miktar:cartItem.product.miktar,fiyat:cartItem.product.urunFiyati,urunResmi:cartItem.product.urununResmi}
        })

      };

  
      emailjs.send(
        "herbalalerya", 
        "herbalalerya_template",
        templateParams,
        "user_uFy2r30Cx87y47ePLbjpc"
        
      );

      console.log(`
        --SUBMITTING--
        Name: ${nameAndSurname}
        Cellphone: ${cellphone}
        Email: ${email}
        City:${city}
        Province:${province}
        Address: ${address}
        AdditionalNotes:${additionalNotes},
        siparisler:${JSON.stringify(this.props.cart)}

      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      nameAndSurname: "",
      cellphone:"",
      email: "",
      city:"",
      province:"",
      address:"",
      additionalNotes:"",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "nameAndSurname":
        formErrors.nameAndSurname = value.length < 1 ? "Lütfen adınızı soyadınızı girin." : "";
        break;
      case "cellphone":
          formErrors.cellphone = value.length < 1 ? "lütfen cep telefonu numaranızı giriniz." : "";
          break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Lütfen geçerli bir email adresi giriniz.";
        break;
      case "city":
        formErrors.city = value.length < 1 ? "Lütfen şehir ismini giriniz." : "";
        break;
      case "province":
        formErrors.province = value.length < 1 ? "Lütfen ilçe ismini giriniz." : "";
        break;
        case "address":
          formErrors.address = value.length < 1 ? "Lütfen adresinizi giriniz." : "";
          break;
        
        case "additionalNotes":
          formErrors.additionalNotes = value.length < 1 ? "Lütfen siparişle ilgili ek açıklamanız varsa giriniz." : "";
          break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightgray",
            borderRadius:"1rem",
            
            
            
          }}
        >
          <div className="col-sm-12 col-12 m-3">
            <p className="kayıt_formu"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#7ac043",
                padding:"1%",
                fontSize:"x-large",
                fontWeight:"bold",
                
              }}
            >
               KAPIDA ÖDEME SAYFASI
            </p>
            
            <form id="contact-form" style={{marginLeft:"10%",marginRight:"10%"}} onSubmit={this.handleSubmit} noValidate>
              <div className="row" >
                <div className="col-12">
                  <input
                    type="text"
                    name="nameAndSurname"
                    value={this.state.nameAndSurname}
                    className={`form-control formInput ${
                      formErrors.nameAndSurname.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Adınız ve Soyadınızı giriniz."
                    noValidate
                  ></input>
                  {formErrors.nameAndSurname.length > 0 && (
                    <span className="errorMessage">{formErrors.nameAndSurname}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="cellphone"
                    value={this.state.cellphone}
                    className={`form-control formInput ${
                      formErrors.cellphone.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Cep telefon numaranızı giriniz."
                    noValidate
                  ></input>
                  {formErrors.cellphone.length > 0 && (
                    <span className="errorMessage">{formErrors.cellphone}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className={`form-control formInput ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="E-mail adresinizi giriniz"
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <br/>
                <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    className={`form-control formInput ${
                      formErrors.city.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Sipariş için şehir giriniz."
                    noValidate
                  ></input>
                  {formErrors.city.length > 0 && (
                    <span className="errorMessage">{formErrors.city}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="province"
                    value={this.state.province}
                    className={`form-control formInput ${
                      formErrors.province.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Sipariş için ilçe giriniz."
                    noValidate
                  ></input>
                  {formErrors.province.length > 0 && (
                    <span className="errorMessage">{formErrors.province}</span>
                  )}
                </div>
               <br/>
               <br/>
                <div className="col-12">
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    className={`form-control formInput ${
                      formErrors.address.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Sipariş için detaylı adres giriniz."
                    noValidate
                  ></input>
                  {formErrors.address.length > 0 && (
                    <span className="errorMessage">{formErrors.address}</span>
                  )}
                </div>
                <br/>
                <br/>

                <div className="col-12">
                  <textarea
                    rows="3"
                    name="additionalNotes"
                    value={this.state.additionalNotes}
                    className={`form-control formInput ${
                      formErrors.additionalNotes.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Siparişle ilgili varsa ek açıklama giriniz."
                    noValidate
                  ></textarea>
                  {formErrors.additionalNotes.length > 0 && (
                    <span className="errorMessage">{formErrors.additionalNotes}</span>
                  )}
                </div>
              </div>
              <br/>
              
              <div
                className="col-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-9">
                  <button
                    className="btn btn-primary siparis-olustur-butonu"
                    type="submit"
                    style={{ width: "100%",backgroundColor:"#7ac043",border:"2px white solid" }}
                  >
                    <b>Sipariş Et</b>
                  </button>
                </div>
              </div>
              <br/>
            </form>
          </div>

          <ToastContainer />
        </div>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Kayıt);
