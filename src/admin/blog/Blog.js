
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Slide } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
      backgroundColor:'#27a844'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Blog() {
    const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
  
    const [blogs, setBlogs] = useState([]);
    const [url, setUrl] = useState("");
    const [heading, setHeading] = useState("");
    const [blogContent, setBlogContent] = useState("");
  
    useEffect(() => {
      // fires once when the app loads
      getBlogs();
    }, []);
  
    const getBlogs = () => {
     
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const kaydet = (e) => {
      e.preventDefault();
     
    };
  return (
    <div className="container" id="blog">
      
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
              <h3 style={{ marginLeft: "5%" }}>Blog Sayfasi Ekle</h3>
            </Toolbar>
          </AppBar>

          <div className="col-12 bg-dark blog-pop">
            <div className="container" style={{ marginTop: "10%" }}>
              <form>
                <div class="form-group text-white">
                  <label for="exampleFormControlInput1">Foto Url</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                  />
                </div>
                <div class="form-group text-white">
                  <label for="exampleFormControlInput1">Baslik Ekle</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Sayfa Adi"
                    value={heading}
                    onChange={(event) => setHeading(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label className="text-white" for="exampleFormControlTextarea1">
                    Blog Yazisi Ekle
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={blogContent}
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setBlogContent(data);
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
                  className="btn btn-primary"
                  type="submit"
                  onClick={kaydet}
                >
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </Dialog>


        <h3 className="text-success text-center">
          Blog Sayfasi Guncelleme
        </h3>
     
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Blog Sayfasi Ekle
          </button>
          
          <h2 className="text-success mt-4">Bloglar</h2>
          <table class="table text-white mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Blog Sayfa Adi</th>
                <th scope="col">Photo Url</th>
                <th scope="col">Sil</th>
                <th scope="col">Guncelle</th>
              </tr>
            </thead>
         
          </table>
        
      
    </div>
  );
}

export default Blog;
