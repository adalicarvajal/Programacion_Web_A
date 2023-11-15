import React, { useReducer } from 'react'
import { TYPES } from '../acciones/accionesCarrito';
import { compraIncialState, compraReducer } from '../reducers/compraReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import Mostrar from '../principal/Mostar';

export const Phase7 = () => {
	const [state,dispatch] = useReducer(compraReducer,compraIncialState);	
	const{products, cart} = state;

	const addToCart	= (id) => {
		//console.log(id);
		dispatch({type:TYPES.ADD_TO_CART, payload:id});
	};
	const delFromCart	= (id,all = false) => {
		//console.log(id,all);
		if(all){
			dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
		} else{
			dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id});
		}
	};
	const clearCart	= () => {
		dispatch({type:TYPES.CLEAR_CART})
	};

	return (
    <div>
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
	<br />
	<h1>Carrito de Compras</h1>
	<br/>
	<h2>Rutas y Horario</h2>
	<article class="box grid-responsive">
		{products.map((product)=> <ProductItem key={product.id}data={product} addToCart={addToCart}>
		</ProductItem>)}
		<Mostrar/>
		
	</article>
	<h3>Boletos en carrito</h3>
	<article class="box ">
		<button  class="button" onClick={clearCart}>Limpiar Carrito</button>
		{
			cart.map((item,index) => <CartItem key={item.id}data={item}delFromCart={delFromCart}/>)
		}
	</article>
    </div>
  )
}
