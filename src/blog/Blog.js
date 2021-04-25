import "./Blog.css";
import h1 from "./herbalife1.jpg";
import h2 from "./herbalife2.jpg";
import h3 from "./herbalife3.jpg";
import useDocumentTitle from "../useDocumentTitle";
import html from "react-inner-html";

import React, { useState, useEffect } from "react";
import {db} from "../firebase";

function Blog() {
  const [blogs, setBlogs] = useState([]);
    const [url, setUrl] = useState("");
    const [heading, setHeading] = useState("");
    const [blogContent, setBlogContent] = useState("");
  
    useEffect(() => {
      // fires once when the app loads
      getBlogs();
    }, []);
  
    const getBlogs = () => {
      db.collection("blogs")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:doc.data().url,
            heading: doc.data().heading,
            blogContent: doc.data().blog_content,
          }))
        );
      });
    }



  useDocumentTitle('Blog - Herbalife')
    return (
    <div className="container border border-5">
      <div className="row">
           
      {blogs.map((blog, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 duyuruholder">
          <img src={blog.url} className="blogcard" alt="..."></img>
          <p className="blogbaslik">{blog.heading}</p> 
          <p className="blogyazi" {...html(blog.blogContent)}></p>
          
        
          </div>
           
          ))}


                


                

                



            </div>    
      </div>

   
    )
}

export default Blog
