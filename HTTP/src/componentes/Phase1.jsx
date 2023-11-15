import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


export const Phase1 = () => {

  const [inputs, setInputs] =  useState({
    usuario:"",
    clave:"",
  })

  const [err, setErr] =  useState(null)  

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  };

  const { login } = useContext( AuthContext );

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/inicio")
    } catch (err) {

      setErr(err.response.data);
    }

    
  }

  return (
    <div>
    <header>
        <nav>
				<div>
						<img src="./imagenes/vtd2.png" alt="VTD" class="logo"/>
				</div>
				<h1 id="name">TIME TRAVELS</h1>
				<input type="checkbox" id="check"/>
				<label for="check" class="bar-btn">
						<i class="fas fa-bars"></i>
				</label>
        <ul class="nav-menu">
						<li><Link to={"/registro"}>Registro</Link></li>
				</ul>
		</nav>   
    </header>

    
    <form class="login-form">
    <h1 id="log">LOGIN</h1>
  <input type="text" class="login-username" autofocus="true" required="true" placeholder="Usuario" name="usuario" onChange={handleChange}/>
  <input type="password" class="login-password" required="true" placeholder="Contraseña" name="clave" onChange={handleChange}/>
  {err && err}
  <button onClick={handleLogin} class="login-submit">Login</button>
</form>
  
    </div>

  )
}
