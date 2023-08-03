import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import { useState } from "react";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../../assets/image_6487327.JPG"
import Logout from "../Logout/Logout";


 const Navbar = () => {

    const [show, setShow] = useState(false);


    return(
        <div className="navbar-container">
            <div className="row">
                <div className="col-sm-4 col-1 left">
                    <AccountCircleIcon className="account" onClick = {() => setShow(!show)} sx={{ color: 'white', fontSize: 50 }}/>
                    {
                       show ? 
                       <div className="logout">
                            <Logout/>
                       </div> : null
                    }              
                </div>
                <div className="col-sm-4 col-6 logo">
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