import React from 'react'
import Manager from './Manager';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  return (
    <div>
        <p>Inventory Manager Thing Login</p>
        <input placeholder="username" type={'text'} />
        <br/>
        <input placeholder="password" type={'text'} />

        {/* <button onClick={Manager}>Login</button> */}
        <br/>
        <button onClick={() => navigate("/Manager")}>Login</button>


    </div>
  )
}

export default Login