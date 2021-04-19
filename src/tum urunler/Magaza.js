import React, { useState, useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useDocumentTitle from "../useDocumentTitle";
import DataView from "./urunDataViewComponent/DataView";
import { db } from "./../firebase";
import firebase from "firebase";


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
  useDocumentTitle('Mağaza - Herbalife')
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const [kiloYonetimi, setKiloYonetimi] = useState([]);
  const [kisiselBakim, setKisiselBakim] = useState([]);
  const [takviye, setTakviye] = useState([]);
  const [tanitim, setTanitim] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    getProducts();
  }, []);

  const getKiloYonetimi = ()=>{
    db.collection("products").where("urunKategorisi", "==", 'Kilo Yonetimi')
    .get()
    .then((snapshot) => {
      setKiloYonetimi(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          urunAdi: doc.data().urunAdi,
          urunKategorisi: doc.data().urunKategorisi,
          urunResmi: doc.data().urunResmi,
          urunFiyati: doc.data().urunFiyati,
          urunIndirimliFiyati: doc.data().urunIndirimliFiyati,
          urunAciklamasi: doc.data().urunAciklamasi,
          urunEkbilgisi: doc.data().urunEkbilgisi,
        }))
      );
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }
  
  const getProducts = () => {
    db.collection("products")
      .orderBy("timeStamp", "desc")
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
          }))
        );
      });
     
   
  };

  return (
    <div className="w-100 mx-2">
      <div className="row p-3 bg-dark text-white">
        <h3>ANASAYFA / MAĞAZA</h3>
      </div>

      <div className="row py-4">
        <div className="container bg-light">
          <div className="row">
            <div className="col-lg-3 col-xs-12 p-1 text-center">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    <p
                      className="w-100 font-weight-bold"
                      style={{ fontSize: "x-large" }}
                    >
                      Ürün Kategorileri
                    </p>
                  </ListSubheader>
                }
                className={classes.root}
              >
                <ListItem button>
                  <ListItemText primary="Kilo Yönetimi" />
                </ListItem>


                <ListItem button>
                  <ListItemText primary="Kişisel Bakım" />
                </ListItem>

                <ListItem button>
                  <ListItemText primary="Özel Setler" />
                </ListItem>

                <ListItem button>
                  <ListItemText primary="Takviye Edici Gıdalar" />
                </ListItem>

                <ListItem button>
                  <ListItemText primary="Tanıtım Ürünleri" />
                </ListItem>

              </List>
            </div>

               


            <div className="col-lg-9 col-xs-12 ">
                <DataView/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magaza;
