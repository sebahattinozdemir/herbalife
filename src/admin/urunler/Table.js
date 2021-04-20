import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSnackbar } from "notistack";
import { db } from "./../../firebase";
import firebase from "firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

function Table({ product, index, getProducts }) {
  const [open, setOpen] = React.useState(false);
  const [urunAdi, setUrunAdi] = useState(product.urunAdi);
  const [urunKategorisi, setUrunKategorisi] = useState(product.urunKategorisi);
  const [urunResmi, setUrunResmi] = useState(product.urunResmi);
  const [urunFiyati, setUrunFiyati] = useState(product.urunFiyati);
  const [urunIndirimliFiyati, setUrunIndirimliFiyati] = useState(
    product.urunIndirimliFiyati
  );
  const [urunAciklamasi, setUrunAciklamasi] = useState(product.urunAciklamasi);
  const [urunEkbilgisi, setUrunEkbilgisi] = useState(product.urunEkbilgisi);

  const categoryChanged = (event) => {
    setUrunKategorisi(event.target.value);
  };

  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();

    db.collection("products")
      .doc(product.id)
      .set(
        {
          urunAdi: urunAdi,
          urunKategorisi: urunKategorisi,
          urunResmi: urunResmi,
          urunFiyati: urunFiyati,
          urunIndirimliFiyati: urunIndirimliFiyati,
          urunAciklamasi: urunAciklamasi,
          urunEkbilgisi: urunEkbilgisi,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
      .then((data) => {
        enqueueSnackbar("Urun güncellendi.", {
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

    setOpen(false);
  };
  return (
    <tbody>
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
                  htmlfor="exampleFormControlInput1"
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
                  htmlfor="exampleFormControlSelect1"
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
                  htmlfor="exampleFormControlInput1"
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
                  htmlfor="exampleFormControlInput1"
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
                  htmlfor="exampleFormControlInput1"
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
                  htmlfor="exampleFormControlTextarea1"
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
                  htmlfor="exampleFormControlTextarea1"
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
                onClick={guncelle}
              >
                Guncelle
              </button>
            </form>
          </div>
        </div>
      </Dialog>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <img
            className="img-thumbnail"
            style={{ width: "140px", height: "140px" }}
            src={product.urunResmi}
          ></img>
        </td>
        <td>{product.urunAdi}</td>
        <td>{product.urunKategorisi}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) => {
              db.collection("products")
                .doc(product.id)
                .delete()
                .then((data) => {
                  enqueueSnackbar("Urun silindi.", {
                    autoHideDuration: 3000,
                    variant: "error",
                  });
                })
                .catch((err) => {
                  enqueueSnackbar("Hata oluştu.", {
                    autoHideDuration: 3000,
                    variant: "error",
                  });
                });
            }}
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
