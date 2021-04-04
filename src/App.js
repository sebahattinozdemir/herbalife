import "./App.css";
import React, { useState } from "react";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="app w-100">
      <div className="w-100">
        <div className="container">
          <div className="row">
            <div className="col">LOGO</div>
            <div className="col">SEARCH BAR</div>
          </div>
        </div>
      </div>

      <Navbar className="nav" dark expand="md">
        <NavbarBrand href="/">YASAM KOCU ISIM</NavbarBrand>
        <div className="container text-white">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">ANASAYFA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  TUM URUNLER
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  BLOG
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  TUM URUNLER
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  VUCUT KITLE ENDEKSI
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  HAKKIMIZDA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  ILETISIM
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>7/24</NavbarText>
            <NavbarText>telefon</NavbarText>
          </Collapse>
        </div>
      </Navbar>

      <div className="w-100">
        <div className="container">
          <div className="row">
            <div className="col">UCRETSIZ YASAM KOCU DESTEGI</div>
            <div className="col">DISTRIBUTIR</div>
            <div className="col">TURKIYENIN KARGO</div>
          </div>
        </div>
      </div>

      <div className="w-100">CAROUSELLL</div>

    
      <div className="container border border-5 border-danger">
        <div className="row">
          <div className="col-6">kadinlara ozel</div>
          <div className="col-6">erkeklere ozel</div>
        </div>

        <div className="row mt-3">
          <div className="col-3">
            <div class="card" style={{ backgroundColor: "#f5f0da" }}>
              <h5 class="card-header">ozel setler</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-9 shadow bg-white">urunler</div>
        </div>

        <div className="row mt-3">
        <div className="col-3">
            <div class="card" style={{ backgroundColor: "#81bac3" }}>
              <h5 class="card-header">kilo yonetimi</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-9 shadow bg-white">urunler</div>
        </div>

        <div className="row mt-3">
          
          <div className="col-3">
            <div class="card" style={{ backgroundColor: "#bcc6be" }}>
              <h5 class="card-header">kisisel bakim</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            
          </div>
          </div>
          <div className="col-9 shadow bg-white">urunler</div>
        </div>

        <div className="row mt-3">
          <div className="col-3">
          
            <div class="card" style={{ backgroundColor: "#9ec1a3" }}>
              <h5 class="card-header">takviye edici gidalar</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
  
          </div>
          </div>
          <div className="col-9 shadow bg-white">urunler</div>
        </div>
        <div className="row mt-3">
        <div className="col-3">
            <div class="card" style={{ backgroundColor: "#70a9a2" }}>
              <h5 class="card-header">shaker suluklar</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-9 shadow bg-white">
            urunler

            
            </div>
        </div>
      </div>

      <div className="w-100">
        <div className="container">
          <div className="row">
            <div className="col-3">guvenli alisveris</div>
            <div className="col-3">7/24</div>
            <div className="col-3">ucresiz iade</div>
            <div className="col-3">guvenli teslimat</div>
          </div>
        </div>
      </div>

      <div className="footer w-100">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-3">Hakkimizda</div>
            <div className="col-3">one cikan kategoriler</div>
            <div className="col-3">bilgilendirme</div>
          </div>
        </div>
        <div className="w-100 footer-alt p-4">
          <div className="w-100">
            <div className="container">
              <div className="row">
                <div className="col-3 text-white">herbalife nutriton</div>
                <div className="col-3 text-white">bagimsizlik uysei</div>

                <div className="col-3 text-white">sebertech</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 footer-alt2 p-3"></div>
      </div>
    </div>
  );
}

export default App;
