import React, { useState } from "react";
import "./Menu.css"
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
    <div>
      <div className="w-100 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                className="img-fluid"
                src="https://wooticaret.com/herbalife/wp-content/uploads/2020/10/logo.png"
              />
            </div>
            <div className="col-9">
            
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

      <Navbar className="nav" dark expand="md">
        <NavbarBrand href="/">STORE OF ERSİN</NavbarBrand>
        <div className="container text-white">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                <Link className="text-decoration-none btn text-white menu-item" to="/">
                  ANASAYFA
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="text-decoration-none btn text-white menu-item"
                  to="/magaza"
                >
                  TUM URUNLER
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
                  VUCUT KITLE ENDEKSI
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
                  ILETISIM
                </Link>
              </NavItem>
            </Nav>

            <NavbarText className="text-white">
             
              <p className="px-3 my-2" title="7/24 | Siparis Hizmeti" style={{borderRight:'1px solid white'}}> 7/24</p>
            </NavbarText>
            
            <NavbarText>
               <p className="btn  px-3 my-2 text-white" data-toggle="tooltip" title=" 0542 458 78 78"> 0542 458 78 78</p>
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Menu;
