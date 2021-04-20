import React, { useEffect } from "react";
import Blog from "./blog/Blog";
import "./AdminManager.css";
import Urunler from "./urunler/Urunler";


function AdminManager(props) {
  const { handleLogout } = props;

  useEffect(() => {
         urunler();
  }, []);

  const blog = () => {
    document.getElementById("blog").style.display = "block";
    document.getElementById("admin-urunler").style.display = "none";
  
  };

  const urunler = () => {
    document.getElementById("blog").style.display = "none";
    document.getElementById("admin-urunler").style.display = "block"
  };

  

  return (
    <div className="row">
      <div className="container-fluid">
        <div className="row d-lg-none d-xl-none d-md-block d-sm-block d-xs-block ">
          <div className="col-12 text-center">
            <h3>ADMIN PANEL</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-xs-12 px-1 bg-success vh-lg-100 overflow-scroll">
            <div className="col-12 mt-lg-5">
              <button
                className="btn btn-outline text-white m-3"
                onClick={urunler}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Urun Islemleri
              </button>

              <button
                className="btn btn-outline text-white m-3"
                onClick={blog}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "16px",
                  display: "block",
                  width: "100%",
                }}
              >
                Blog Islemleri
              </button>

        

              <button onClick={handleLogout} className="btn btn-danger text-white m-3">
                logout
              </button>

            </div>
          </div>

          <div style={{minHeight:"100vh",}} className="col-lg-10 col-xs-12  mvh-100 bg-dark">
            <div className="row d-none d-lg-block d-md-none d-xl-block">
              <div className="col-12 text-center text-white mt-3">
                <h3>ADMIN PANEL</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Blog></Blog>
                <Urunler></Urunler>
 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManager;
