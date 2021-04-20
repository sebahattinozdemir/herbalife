import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Table from "./Table";
import { Slide } from "@material-ui/core";
import { db } from "./../../firebase";
import firebase from "firebase";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#27a844",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Urunler() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [product, setProducts] = useState([]);

  const [urunAdi, setUrunAdi] = useState("");
  const [urunKategorisi, setUrunKategorisi] = useState("");
  const [urunResmi, setUrunResmi] = useState("");
  const [urunFiyati, setUrunFiyati] = useState("");
  const [urunIndirimliFiyati, setUrunIndirimliFiyati] = useState("");
  const [urunAciklamasi, setUrunAciklamasi] = useState("");
  const [urunEkbilgisi, setUrunEkbilgisi] = useState("");

  useEffect(() => {
    // fires once when the app loads
    getProducts();
  }, []);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const kaydet = (e) => {
    e.preventDefault();
    db.collection("products")
      .add({
        urunAdi: urunAdi,
        urunKategorisi: urunKategorisi,
        urunResmi: urunResmi,
        urunFiyati: urunFiyati,
        urunIndirimliFiyati: urunIndirimliFiyati,
        urunAciklamasi: urunAciklamasi,
        urunEkbilgisi: urunEkbilgisi,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((data) => {
        getProducts();
        enqueueSnackbar("Urun eklendi.", {
          autoHideDuration: 3000,
          variant: "info",
        });
      })
      .catch((err) => {
        enqueueSnackbar("Hata oluştu.", {
          autoHideDuration: 3000,
          variant: "error",
        });
      });

    setUrunAciklamasi("");
    setUrunAdi("");
    setUrunEkbilgisi("");
    setUrunFiyati("");
    setUrunIndirimliFiyati("");
    setUrunKategorisi("");
    setUrunResmi("");
    setOpen(false);
  };
  const categoryChanged = (event) => {
    setUrunKategorisi(event.target.value);
  };
  return (
    <div className="container" id="admin-urunler">
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <h3 style={{ marginLeft: "5%" }}>Herbalife Urun Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 bg-dark blog-pop">
          <div className="container mx-auto my-5">
            <form>
              <div className="form-group text-white">
                <label
                  style={{ fontSize: "x-large" }}
                  for="exampleFormControlInput1"
                >
                  Urun Adi
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg "
                  id="exampleFormControlInput1"
                  placeholder="Url"
                  value={urunAdi}
                  onChange={(event) => setUrunAdi(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-white"
                  style={{ fontSize: "x-large" }}
                  for="exampleFormControlSelect1"
                >
                  Urun Kategori
                </label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={categoryChanged}
                  value={urunKategorisi}
                >
                  <option>Urun Kategorisini Seciniz</option>
                  <option>Kilo Yonetimi</option>
                  <option>Kisisel Bakim</option>
                  <option>Ozel Setler</option>
                  <option>Takviye Edici Gidalar</option>
                  <option>Tanitim Urunleri</option>
                </select>
              </div>
             
              <div className="form-group text-white">
                <label
                  style={{ fontSize: "x-large" }}
                  for="exampleFormControlInput1"
                >
                  Urun Resmi
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="urun resim url"
                  value={urunResmi}
                  onChange={(event) => setUrunResmi(event.target.value)}
                />
              </div>
              <div className="form-group text-white">
                <label
                  style={{ fontSize: "x-large" }}
                  for="exampleFormControlInput1"
                >
                  Urun Fiyati
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Urun Fiyati"
                  value={urunFiyati}
                  onChange={(event) => setUrunFiyati(event.target.value)}
                />
              </div>
              <div className="form-group text-white">
                <label
                  style={{ fontSize: "x-large" }}
                  for="exampleFormControlInput1"
                >
                  Urun Indirimli Fiyati
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Urun Indirimli Fiyati"
                  value={urunIndirimliFiyati}
                  onChange={(event) =>
                    setUrunIndirimliFiyati(event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label
                  style={{ fontSize: "x-large" }}
                  className="text-white"
                  for="exampleFormControlTextarea1"
                >
                  Urun Aciklamasi
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={urunAciklamasi}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUrunAciklamasi(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <div className="form-group">
                <label
                  style={{ fontSize: "x-large" }}
                  className="text-white"
                  for="exampleFormControlTextarea1"
                >
                  Urun Ekbilgisi
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={urunEkbilgisi}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setUrunEkbilgisi(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <button
                className="btn btn-lg btn-success"
                type="submit"
                onClick={kaydet}
              >
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <h3 className="text-success text-center">Herbalife Urunler Sayfasi</h3>

      <button className="btn btn-success" onClick={handleClickOpen}>
        Urun Ekle
      </button>

      <h2 className="text-success mt-4">Urunler</h2>
      <table className="table text-white mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Urun Resmi</th>
            <th scope="col">Urun Adi</th>
            <th scope="col">Urun Kategorisi</th>
            <th scope="col">Sil</th>
            <th scope="col">Guncelle</th>
          </tr>
        </thead>
        {product.map((product, index) => (
          <Table
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </table>
    </div>
  );
}

export default Urunler;
