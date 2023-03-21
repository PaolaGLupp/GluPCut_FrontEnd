import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../context/context";
import {useState} from 'react';

import '../assets/Login.css'


const Login = () => {

    const { log, handleError } = useAppContext()
    const toHome = useNavigate();

    const url = "http://localhost:5000/login";

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const login = async (e) => {
        e.preventDefault();

        if ((data.email == "") || (data.password == "")) {
            if (data.email == "") {
                alert("Email needed")
            } else if (data.password == "") {
                alert("Password needed");
            }
            return;
        }

        const body = {
            email: data.email,
            password: data.password,
        }


        try {
            const res = await fetch(url,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await res.json();

            if (parseRes.error || parseRes.errors) {
                handleError(parseRes.errors[0].msg)
                    
             }    


 
             

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                localStorage.setItem("id", parseRes.id);

                log();
                toHome("/");

            } else {
                console.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }


    return (
        <>
            <div className="login-container">
                <h1>Login!</h1>
            </div>
            <div className="login-form-container">

                <div className="box-login">

                    <h4 className="subtitle-login">Dont have an account yet? <b className="reg"><Link className='link' to="/register">Sign Up!</Link></b> </h4>

                </div>

                <div className="big-login-input">
                    <div>
                        <input className='login-input' type="text" name="email" placeholder="Email" required onChange={(e) => handle(e)} id="email" value={data.email} />
                    </div>

                    <div >
                        <input className='login-input' type="password" placeholder="Password" required onChange={(e) => handle(e)} id="password" value={data.password} />
                    </div>
                </div>
                <div className="">
                    <button type='button' className="login-btn" onClick={login}>Login</button>
                </div>

            </div>
        </>
    )
}

export default Login;