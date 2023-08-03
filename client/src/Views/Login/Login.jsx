import "./login.css"
import React, { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login} = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e)=>{
        e.preventDefault()
        try{
            await login(inputs);
            navigate("/")

        }catch(err){
            setErr(err.response.data)
        }
    };

    return(
        <div className="login">
            <div className="login-card">
                <div className="login-left">
                    <h1 id="welcome">Welcome Back</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>Dont Have an Account?</span>
                    <Link to='/register'>
                    <button id="login-reg-bttn">Register</button>
                    </Link>
                </div>
                <div className="login-right">
                    <h1>Login</h1>
                        <form className="login-form">
                        <label htmlFor="username"> Username </label>
                        <input id="input" type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <label htmlFor="password"> Password </label>
                        <input id="input" type="password" placeholder="*********" name="password" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleLogin} id="login-bttn">Login</button>
            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;