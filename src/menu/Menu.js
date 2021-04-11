import React, { useState } from "react";
import "./Menu.css"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
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

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="nav-menu">
      <div className="w-100 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <img
                className="img-fluid"
                src="https://wooticaret.com/herbalife/wp-content/uploads/2020/10/logo.png"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 search">
            
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2 w-100 border-radius-5"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
           
            </div>
          </div>
        </div>
      </div>
      <br/>

      <Navbar className="nav" dark expand="md" style={{paddingTop:"0px",paddingBottom:"0px",height:"3rem"}}>
        
        <div className="container text-white">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                <Link className="text-decoration-none btn text-white menu-item" to="/" style={{backgroundColor:"black"}}>
                  ANASAYFA
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/magaza"
                >
                  TÜM ÜRÜNLER
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/blog"
                >
                  BLOG
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/vucut-kitle-endeksi"
                >
                  VÜCUT KİTLE İNDEKSİ
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/hakkimizda"
                >
                  HAKKIMIZDA
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/iletisim"
                >
                  İLETİŞİM
                </Link>
              </NavItem>
            </Nav>

            <NavbarText className="text-white">
              
              <p className="px-3 my-2" title="7/24 | Siparis Hizmeti" style={{borderRight:'1px solid white'}}><AccessTimeIcon/> 7/24</p>
            </NavbarText>
            
            <NavbarText>
               <p className="btn  px-3 my-2 text-white" data-toggle="tooltip" title=" 0542 458 78 78"><CallIcon/> 0542 458 78 78</p>
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Menu;
