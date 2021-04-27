import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useDocumentTitle from "../useDocumentTitle";
import DataView from "./urunDataViewComponent/DataView";
import { db } from "./../firebase";
import firebase from "firebase";
import { Paginator } from "primereact/paginator";
import ÜrünDetay from "../ÜrünAcıklama/ÜrünAcıklama.js";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

import Header from "../headerComponent/Header.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Magaza() {
  useDocumentTitle("Mağaza - Herbalife");
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState();

  useEffect(() => {
    // fires once when the app loads
    getProducts();
  }, []);

  // tum urunler
  const getProducts = () => {
    setProducts([]);
    setCategory("tum-urunler");
    db.collection("products")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  //kilo yonetim urunleri
  const getKiloYonetimi = () => {
    setProducts([]);
    setCategory("kilo-yonetimi");

    db.collection("products")
      .where("urunKategorisi", "==", "Kilo Yonetimi")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  //kisisel bakim urunleri
  const getKisiselBakim = () => {
    setProducts([]);
    setCategory("kisisel-bakim");

    db.collection("products")
      .where("urunKategorisi", "==", "Kisisel Bakim")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  const getOzelSetler = () => {
    setProducts([]);
    setCategory("ozel-setler");

    db.collection("products")
      .where("urunKategorisi", "==", "Ozel Setler")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  const getTakviye = () => {
    setProducts([]);
    setCategory("takviye-edici-gidalar");
    db.collection("products")
      .where("urunKategorisi", "==", "Takviye Edici Gidalar")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  const getTanitim = () => {
    setProducts([]);
    setCategory("tanitim-urunleri");
    db.collection("products")
      .where("urunKategorisi", "==", "Tanitim Urunleri")
      .orderBy("timeStamp", "desc")
      .limit(12)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            urunAdi: doc.data().urunAdi,
            urunKategorisi: doc.data().urunKategorisi,
            urunResmi: doc.data().urunResmi,
            urunFiyati: doc.data().urunFiyati,
            urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
            urunAciklamasi: doc.data().urunAciklamasi,
            urunEkbilgisi: doc.data().urunEkbilgisi,
            timeStamp: doc.data().timeStamp,
          }))
        );
      });
  };

  const showNext = ({ item }) => {
    if (products.length === 0) {
    } else {
      setProducts([]);
      if (category === "tum-urunler") {
        db.collection("products")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
            setPage(page + 1);
          });
      } else if (category === "kilo-yonetimi") {
        db.collection("products")
          .where("urunKategorisi", "==", "Kilo Yonetimi")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
          });
      } else if (category === "kisisel-bakim") {
        db.collection("products")
          .where("urunKategorisi", "==", "Kisisel Bakim")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
          });
      } else if (category === "ozel-setler") {
        db.collection("products")
          .where("urunKategorisi", "==", "Ozel Setler")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
          });
      } else if (category === "takviye-edici-gidalar") {
        db.collection("products")
          .where("urunKategorisi", "==", "Takviye Edici Gidalar")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
          });
      } else {
        db.collection("products")
          .where("urunKategorisi", "==", "Tanitim Urunleri")
          .orderBy("timeStamp", "desc")
          .limit(12)
          .startAfter(item.timeStamp)
          .onSnapshot((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                urunAdi: doc.data().urunAdi,
                urunKategorisi: doc.data().urunKategorisi,
                urunResmi: doc.data().urunResmi,
                urunFiyati: doc.data().urunFiyati,
                urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
                urunAciklamasi: doc.data().urunAciklamasi,
                urunEkbilgisi: doc.data().urunEkbilgisi,
                timeStamp: doc.data().timeStamp,
              }))
            );
          });
      }
    }
  };

  const showPrevious = ({ item }) => {
    setProducts([]);

    if (category === "tum-urunler") {
      db.collection("products")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    } else if (category === "kilo-yonetimi") {
      db.collection("products")
        .where("urunKategorisi", "==", "Kilo Yonetimi")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    } else if (category === "kisisel-bakim") {
      db.collection("products")
        .where("urunKategorisi", "==", "Kisisel Bakim")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    } else if (category === "ozel-setler") {
      db.collection("products")
        .where("urunKategorisi", "==", "Ozel Setler")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    } else if (category === "takviye-edici-gidalar") {
      db.collection("products")
        .where("urunKategorisi", "==", "Takviye Edici Gidalar")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    } else {
      db.collection("products")
        .where("urunKategorisi", "==", "Tanitim Urunleri")
        .orderBy("timeStamp", "desc")
        .endBefore(item.timeStamp)
        .limitToLast(12)
        .onSnapshot((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              urunAdi: doc.data().urunAdi,
              urunKategorisi: doc.data().urunKategorisi,
              urunResmi: doc.data().urunResmi,
              urunFiyati: doc.data().urunFiyati,
              urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
              urunAciklamasi: doc.data().urunAciklamasi,
              urunEkbilgisi: doc.data().urunEkbilgisi,
              timeStamp: doc.data().timeStamp,
            }))
          );
          setPage(page - 1);
        });
    }
  };

  return (
    <div className="w-100 mx-2">
      <Header
        page_title="Mağaza"
      />
      

      <div className="row py-4">
        <div className="container bg-light">
          <div className="row">
            <div className="col-lg-3 col-xs-12 p-1 text-center">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    <Link
                      onClick={getProducts}
                      className="text-decoration-none btn btn-success w-100"
                      to="/magaza"
                    >
                      Ürün Kategorileri
                    </Link>
                  </ListSubheader>
                }
                className={classes.root}
              >
                <ListItem button>
                  <Link
                    onClick={getKiloYonetimi}
                    className="text-decoration-none btn btn-light w-100"
                    to="/magaza/kilo-yonetimi"
                  >
                    Kilo Yönetimi
                  </Link>
                </ListItem>

                <ListItem button>
                  <Link
                    onClick={getKisiselBakim}
                    className="text-decoration-none btn btn-light w-100"
                    to="/magaza/kisisel-bakim"
                  >
                    Kişisel Bakım
                  </Link>
                </ListItem>

                <ListItem button>
                  <Link
                    onClick={getOzelSetler}
                    className="text-decoration-none btn btn-light w-100"
                    to="/magaza/ozel-setler"
                  >
                    Özel Setler
                  </Link>
                </ListItem>

                <ListItem button>
                  <Link
                    onClick={getTakviye}
                    className="text-decoration-none btn btn-light w-100"
                    to="/magaza/takviye-edici-gidalar"
                  >
                    Takviye Edici Gıdalar
                  </Link>
                </ListItem>

                <ListItem button>
                  <Link
                    onClick={getTanitim}
                    className="text-decoration-none btn btn-light w-100"
                    to="/magaza/tanitim-urunleri"
                  >
                    Tanıtım Ürünleri
                  </Link>
                </ListItem>
              </List>
            </div>

            <div className="col-lg-9 col-xs-12 ">
              <DataView products={products} />

              <div className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                  {page === 1 ? (
                    ""
                  ) : (
                    <li
                      className="btn btn-link page-item mx-2"
                      onClick={() => showPrevious({ item: products[0] })}
                    >
                      <a className="page-link">
                        <ArrowBackIosIcon />
                        Geri
                      </a>
                    </li>
                  )}
                  {products.length < 12 ? (
                    ""
                  ) : (
                    <li
                      className="btn btn-link page-item mx-2"
                      onClick={() =>
                        showNext({ item: products[products.length - 1] })
                      }
                    >
                      <a className="page-link">
                        <ArrowForwardIosIcon />
                        Ileri
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magaza;
