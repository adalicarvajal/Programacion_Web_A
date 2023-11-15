import React from 'react'

const CartItem = ({data, delFromCart}) => {
    let {id, name,des, horario, price, quantity} = data;
    return (
    <div style={{borderBottom:"thin solid gray"}}>
        <br/>
        <h4>{name}</h4>
        <br/>
        <h4>{des}</h4>
        <br/>
        <h4>{horario}</h4>
        <h5>${price}.00 x{quantity} = ${price*quantity}.00</h5>
        <br/>
        <button  class="button" onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br/>
        <br/>
        <button class="button" onClick={() => delFromCart(id,true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem