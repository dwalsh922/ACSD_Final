import "./register.css"
import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [err, setErr] = useState(null);

    const handleChange = (e) =>{
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e=>{
        e.preventDefault()
        
        try{
            await axios.post("http://localhost:3001/api/auth/register", inputs)

        }catch(err){
            setErr(err.response.data);

        }
    };
    console.log(err)

    return(
        <div className="register">
            <div className="register-card">
                <div className="register-left">
                    <h1 id="hello">Hello!</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>Already Have an Account?</span>
                    <Link to='/login'>
                    <button id="reg-login-bttn">Login</button>
                    </Link>
                </div>
                <div className="register-right">
                    <h1>Register</h1>
                    <form className="register-form">
                        <label htmlFor="username"> Username </label>
                        <input id="input" type="text" name="username" placeholder="Username" onChange={handleChange}/>
                        <label htmlFor="email"> Email </label>
                        <input id="input" type="text" name="email" placeholder="Email" onChange={handleChange}/>
                        <label htmlFor="password"> Password </label>
                        <input id="input" type="password" name="password" placeholder="*********" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick} id="register-bttn">Register</button>

            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;