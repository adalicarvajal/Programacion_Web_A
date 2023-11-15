import React from 'react'

const ProductItem = ({data, addToCart}) => {
  let {id, name, des,horario,price} = data;
    return (
    <div style={{border:"thin solid gray",padding:"1rem"}}>
        <h3>{name}</h3>
        <br/>
        <h4>{des}</h4>
        <br/>
        <h4>{horario}</h4>
        <h5>${price}.00</h5>
        <br/>
        <button class="button" onClick={() => addToCart(id)}>Agregar</button>
    </div>
  )
}

export default ProductItem