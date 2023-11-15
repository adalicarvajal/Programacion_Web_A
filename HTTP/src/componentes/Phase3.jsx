import React from 'react'
import { Link } from 'react-router-dom'

export const Phase3 = () => {
  return (
    <div>
      <header class="principal">
		<nav>
				<div>
						<img src="./imagenes/vtd-logo.png" alt="VTD" class="logo"/>
				</div>
				<h1 class="name">TIME TRAVELS</h1>
				<input type="checkbox" id="check"/>
				<label for="check" class="bar-btn">
						<i class="fas fa-bars"></i>
				</label>
				<ul class="nav-menu">
						<li><Link to={"/servicios"}>Servicios</Link></li>
						<li><Link to={"/conocer"}>Conocenos</Link></li>
						<li><Link to={""}>Cerrar Sesion</Link></li>
				</ul>
		</nav>
		<div class="banner-text">
			<h1>BIENVENIDO</h1>
			<h2>A LA MAXIMA EXPERIENCIA DE <span>VIAJE</span></h2>
			<br/>
		</div>
	</header>
    </div>
  )
}
