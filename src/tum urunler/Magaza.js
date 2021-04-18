import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useDocumentTitle from "../useDocumentTitle";


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
  const [openKilo, setOpenKilo] = React.useState(false);

  const [openTakviye, setOpenTakviye] = React.useState(false);

  const [openTanitim, setOpenTanitim] = React.useState(false);

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
                      {" "}
                      Ürün Kategorileri
                    </p>
                  </ListSubheader>
                }
                className={classes.root}
              >
                <ListItem button onClick={() => setOpenKilo(!openKilo)}>
                  <ListItemText primary="Kilo Yönetimi" />
                  {openKilo ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openKilo} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Atıştırmalık" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Herbalife Shake" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="İçecekler" />
                    </ListItem>
                  </List>
                </Collapse>

                <ListItem button>
                  <ListItemText primary="Kişisel Bakım" />
                </ListItem>

                <ListItem button>
                  <ListItemText primary="Özel Setler" />
                </ListItem>

                <ListItem button onClick={() => setOpenTakviye(!openTakviye)}>
                  <ListItemText primary="Takviye Edici Gıdalar" />
                  {openTakviye ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openTakviye} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Sporcu Beslenmesi" />
                    </ListItem>
                  </List>
                </Collapse>

                <ListItem button onClick={() => setOpenTanitim(!openTanitim)}>
                  <ListItemText primary="Tanıtım Ürünleri" />
                  {openTanitim ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openTanitim} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Shaker / Suluklar" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </div>

               


            <div className="col-lg-9 col-xs-12 ">
              <div className="row">
                <div className="col-lg-3 col-sm-4 col-xs-6">
                  
                  <div class="card-deck">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                        alt="urun adi"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-muted">urun tipi</h5>
                        <p class="card-text">urun ismi</p>
                        <p class="card-text font-weight-bold">urun fiyati</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4 col-xs-6">
                  <div class="card-deck">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src="https://herbaldamla.com/wp-content/uploads/2021/01/tanisma-paketi-247x247.jpg"
                        alt="urun adi"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-muted">urun tipi</h5>
                        <p class="card-text">urun ismi</p>
                        <p class="card-text font-weight-bold">urun fiyati</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav aria-label="...">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">
                      2<span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magaza;
