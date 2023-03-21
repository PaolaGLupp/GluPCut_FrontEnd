import '../assets/Register.css'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

import { useAppContext } from "../context/context";


const Register = () => {
    const { log, handleError } = useAppContext()
    const toLogin = useNavigate();

    const url = 'http://localhost:5000/register';

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })


    const register = async (e) => {

        e.preventDefault();

        if ((data.password) !== (data.passwordAgain)) {
            alert("Las contraseñas no son iguales")
            return;
        }

       const body = {

            name: data.name,
            email: data.email,
            password: data.password
        }

             
            try {
                const res = await fetch(url, 
                {
                    method: "POST",
                    headers: {"Content-Type":"application/json"}, 
                    body: JSON.stringify(body)
                } 
                );
                const parseRes = await res.json();  
    
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);

                log();
                toLogin("/");
      
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
          <div className="title-register2">
            <h1>Register here!</h1>
        </div>
        <div className="box-register">
                
                <h4 className="subtitle-register">You already have an account? <Link className='link-register' to="/login"><b className="register">Sign In!</b></Link> </h4>
                
                </div>
        <div className="register-conteiner">
        <div className="big-register-input">

            <div>
                <input  className='register-input' type="text" name="name" placeholder="Name" required onChange={(e) => handle(e)} id="name" value={data.name} />
            </div>

            <div>
                <input className="register-input" type="text" name="email" placeholder="Email" required onChange={(e) => handle(e)} id="email" value={data.email} />
            </div>

            <div>
                <input className="register-input" type="password" name="password" placeholder="Password" required onChange={(e) => handle(e)} id="password" value={data.password} />
            </div>

            <div>
                <input className="register-input" type="password" name="passwordAgain" placeholder="Repeat your Password" required onChange={(e) => handle(e)} id="passwordAgain" value={data.passwordAgain} />
            </div>

            <div>
            <button type='button' disabled={!data.name || !data.email || !data.password || !data.passwordAgain} className="register-btn" onClick={register}>Register</button>
            </div>
           
                </div>

        </div>
        </>
    )

}

export default Register;