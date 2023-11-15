import React from 'react'
import { Link } from 'react-router-dom'

export const Phase2 = () => {
  return (
    <div >
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
						<li><Link to={"/inicio"}>Inicio</Link></li>
						<li><Link to={"/servicios"}>Servicios</Link></li>
				</ul>
		</nav>
	<br/>
	<div class="tabla">
		<div class="miembro1">
		<br/>
			<div class="foto">
			<img src="./imagenes/adri.jpg" alt="adri" />
			</div>
			<br/>
			<p>Mi nombre es Adriana Díaz. Soy estudiante de Ingenieria de Software. 
				Me encuentro cursando el 4to semestre de la carrera. Tengo un gato naranja llamado Paco. 
				Me interesa la Domótica. </p>
		</div>
		<div class="miembro2">
		<br/>
			<div class="foto">
			<img src="./imagenes/jois.jpg" alt="jois"/>
			</div>
			<br/>
			<p>Me llamo Johanna Pila. Soy estudiante de cuarto semestre de Ingeniería de Software. Me gusta 
					mucho jugar fútbol y básquet, me llama la atenci&oacuten el desarrollo e implementación de videojuegos.
				</p>
		</div>
		<div class="miembro3">
		<br/>
			<div class="foto">
			<img src="./imagenes/dani.jpg"alt='dani'/>
				</div>
			<br/>
			<p>Mi nombre es Daniela Pilataxi. Soy estudiante de Ingeniería de Software. Me encanta ver 
					el fútbol internacional, me llama la atención la tecnología, y sobre todo me encanta todo lo relacionado 
					con inteligencia artificial. 
				</p>
		</div>
		<div class="miembro4">
		<br/>
			<div class="foto">
			<img src="./imagenes/domi.jpg"alt='domi'/>
			</div>
			<br/>
			<p>Mi nombre es Dominique Salazar. Soy estudiante de Ingeniería de Software. Me gusta 
		 			dibujar mandalas y tomarme fotos. Me interesa el desarrollo de videojuegos.
				</p>
		</div>
		<div class="miembro5">
		<br/>
			<div class="foto">
				<img src="./imagenes/gabo.jpg" alt='gabo'/>
			</div>
			<br/>
			<p>Mi nombre es Gabriel Reinoso. Estudiante de Ingeniería de Software, me interesa la fotografía
		 			y la implementación de la inteligencia artificial para la vida cotidiana.
				</p>
		</div>
	  </div>
    </header>
    </div>
  )
}
