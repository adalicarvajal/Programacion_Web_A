import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Phase8 = () => {

  const [inputs, setInputs] =  useState({
    cedula: "",
    usuario:"",
    email:"",
    clave:"",
    nombre:"",
    dirrecion:""

  })

  const [err, setErr] =  useState(null) 
  const navigate = useNavigate()

  const handleChange = e => {
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  }

const handleClick = async e =>{
  e.preventDefault()

  try {
    await axios.post("http://localhost:4000/api/auth/register",inputs)
    navigate("/check")
  } catch (err) {
    setErr(err.response.data)
  }
}
console.log(err)
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
		</nav>   
    </header>

    
    <form class="login-form">
    <h1 id ="log">REGISTRO</h1>
      <input type="text" class="login-username" maxlength="10" required="true" placeholder='Cedula'  name="cedula" onChange={handleChange}/>  
      <input type="text"  class="login-username" autofocus="true" required="true" placeholder="Nombre" name="nombre" onChange={handleChange}/>
      <input type="text"  class="login-username" autofocus="true" required="true" placeholder="Direccion" name="direccion" onChange={handleChange}/>
      <input type="text"  class="login-username" autofocus="true" required="true" placeholder="Usuario" name="usuario" onChange={handleChange}/>
      <input type="email" class="login-usarname" autofocus="true" required="true" placeholder="example@example.com" name="email" onChange={handleChange}/>
      <input type="password"  class="login-password" required="true" placeholder="Contraseña" name="clave" onChange={handleChange}/>
      {err && err}
      <button onClick={handleClick} class="login-submit" >Registro</button>
</form>
  
    </div>
  )
}
