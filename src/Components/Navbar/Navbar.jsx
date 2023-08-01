import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/image_6487327.JPG"


 const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="row">
                <div className="col-sm-4 col-1">
  
                </div>
                <div className="col-sm-4 logo col-6">
                    <Link to="/">
                        <img src={logo}/>
                    </Link>
                </div>
                <div className="col-sm-4 col-3 cart-icon"> 
                    <Link to ="/cart"> 
                        <ShoppingCart size={32}/>
                    </Link>
                </div>
            </div>
        
        </div>
    )
};
export default Navbar;
