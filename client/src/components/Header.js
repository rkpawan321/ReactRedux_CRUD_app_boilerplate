import React from "react";
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">

    <Link to="/" className="item">
    <div style={{paddingTop: 5}}>
        <h1>A Pawsome Blog App</h1>
        </div>
        <h6>        (Please Login to post a blog.)</h6>
    </Link>
    <div className="right menu">
    <div style={{paddingTop: 22}}>
    <Link to="/" className="item">
        All Blogs
    </Link>
    </div>
    <div style={{paddingTop: 20}}>
    <GoogleAuth/>
    </div>
    
    </div>
    </div>
  );
};

export default Header;
