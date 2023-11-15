import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Phase6 } from './Phase6'


export const Phase4 = () => {

	const [estadoModal1, cambiarEstadoModal1] = useState(false);

	return (
    <div class="contenedor" >
        <header class="header">
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
						<li class="link"><Link to={"/inicio"}>Inicio</Link></li>
						<li class="link"><Link to={"/conocer"}>Conocenos</Link></li>
				</ul>
		</nav>
	</header>
<acticle class="main">
	<br />
<h1>SERVICIOS</h1>
<br />
<br />
<h3>Estas son las regiones de nuestro pais de las cuales ofrecemos nuestro servicios de viaje:</h3>
			<br />
    <div class="zonas">
			<div class="zona1">
				<img  src="./imagenes/costa.png" alt="Costa"/>
			</div>
			<div class="zona2">
				<img src="./imagenes/sierra.png" alt="Siera" />
			</div>	
			<div class="zona3">
				<img src="./imagenes/amazonia.png" alt="Amazonia" />
			</div>
		</div>
		<ContenedorBotones>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Rutas y Horarios</Boton>
		</ContenedorBotones>
			<Phase6 estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
			>
			<div class="transporte">
			      <div class="vehiculo1">
				  <Link to={"/vacio"}><img class="carro" src="./imagenes/car1.png" alt="Camioneta"/></Link>
			      </div>
			      <div class="vehiculo2">
					  <Link to={"/compras"}><img class="carro"src="./imagenes/bus1.png" alt="Bus" /></Link>
			      </div>
			      <div class="vehiculo3">
				      <Link to={"/vacio"}><img class="carro"src="./imagenes/taxi1.png" alt="Bus" /></Link>
				    </div>
		      </div>
			</Phase6>

</acticle>
    <aside class="sidebar">
	<h1 align="center">PROMOCIONES</h1>
	<br/>
	<br/>
	<div class="promo">
		<img src="./imagenes/promofut.jpg" alt="Promocion Muldialista" width="250px" align="right"/>
	</div>
	<br/>
	<br/>
	<h1 align="center">OFRECEMOS</h1>
	<br/>
	<br/>
	<div class="promo">
		<img src="./imagenes/promoestudiantes.jpg" alt="Promocion Estudiantil" width="240px" align="right"/>
	</div>
</aside>
<br/>
<br/>
<footer class="footer">
	<p>::: 2022 - © Todos los Derechos Reservados de TimeTravels.Corp:::
    <br/>
		Encuentranos en Av. Granados Oe4-654 y General Sucre
	</p>

</footer>
    </div>
  )
}

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 65px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

