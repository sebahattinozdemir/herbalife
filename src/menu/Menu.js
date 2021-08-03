import React, { useState } from "react";
import "./Menu.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CallIcon from "@material-ui/icons/Call";
import SearchIcon from "@material-ui/icons/Search";
import { Divider } from "primereact/divider";
import logo from "./herbalalerya_logo.png";
import logo2 from "./hl2.png";

import AssignmentIcon from "@material-ui/icons/Assignment";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import BusinessIcon from "@material-ui/icons/Business";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import HomeIcon from "@material-ui/icons/Home";
import { bindActionCreators } from 'redux';
import * as cartActions from "./../redux/actions/cartActions";
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="nav-menu">
      <div className="w-100 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <a href="/">
                <img
                  className="img-fluid analogo"
                  src={logo2}
                  alt="Herbalalerya"
                  title="Herbalalerya"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2 w-100 border-radius-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            <div>
              <Link
                to="/siparis-toplami-odeme"
                title="Sepet"
                style={{
                  align: "center",
                  marginLeft: "1.2rem",
                  color: "black",
                }}
              >
                <LocalMallIcon
                  className="anasepet"
                  style={{
                    width: "3rem",
                    height: "2rem",
                    padding: "0.3rem",
                    border: "1px gray solid",
                    borderRadius: "0.5rem",
                  }}
                  
                />
                {props.cart.length > 0 ? <span className="badge badge-danger sepetUrunSayisi">{props.cart.length}</span> : <span></span>}
                
              </Link>
            </div>

            <div className="yediyirmidort">
              <NavbarText className="text-black">
                <p
                  className="yedi"
                  style={{ marginRight: "2rem" }}
                  title="7/24 | Siparis Hizmeti"
                >
                  <a className="footerphone"
                  target="_blank"
                  href="https://www.google.com/maps?q=Fatih+Mahallesi+200.+Cadde+No:12+Daire:10+Merkez/Isparta&rlz=1C1GCEU_enTR867TR868&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj11Oq4uJXyAhVPg_0HHX-WBAcQ_AUoAXoECAEQAw"
                ><AccessTimeIcon className="icon_top"/> </a> 7/24
                </p>
              </NavbarText>

              <NavbarText>
                <p
                  className="ceptel"
                  data-toggle="tooltip"
                  title=" 0542 458 78 78"
                >
                 <a className="footerphone"
                  href="tel: +905345699125"
                  target="_blank"
                > <CallIcon className="icon_top"/></a> 0546 475 38 83
                </p>
              </NavbarText>
            </div>
          </div>
        </div>
      </div>
      <br />

      <Navbar
        className="nav"
        dark
        expand="md"
        style={{ paddingTop: "0px", paddingBottom: "0px", height: "3rem" }}
      >
        <div className="container text-white">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/"
                >
                  <HomeIcon style={{ fontSize: "large", marginRight: "3px" }} />
                  ANASAYFA
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/magaza"
                >
                  <EnhancedEncryptionIcon
                    style={{ fontSize: "large", marginRight: "3px" }}
                  />
                  TÜM ÜRÜNLER
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/blog"
                >
                  <AssignmentIcon
                    style={{ fontSize: "large", marginRight: "3px" }}
                  />
                  BLOG
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/vucut-kitle-endeksi"
                >
                  <LoyaltyIcon
                    style={{ fontSize: "large", marginRight: "3px" }}
                  />
                  VÜCUT KİTLE İNDEKSİ
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/hakkimizda"
                >
                  <BusinessIcon
                    style={{ fontSize: "large", marginRight: "3px" }}
                  />
                  HAKKIMIZDA
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/iletisim"
                >
                  <ContactPhoneIcon
                    style={{ fontSize: "large", marginRight: "3px" }}
                  />
                  İLETİŞİM
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
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
      addQuantityToProduct: bindActionCreators(cartActions.addQuantityToProduct, dispatch),
      decreaseQuantityToProduct: bindActionCreators(cartActions.decreaseQuantityToProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
