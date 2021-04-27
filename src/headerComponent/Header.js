import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    //Destructing
    const {page_title} = this.props;
    return (
        <div className="row page_header">
           
            <p className="page_header_title">{page_title}</p>
        </div>
    );
  }
}
