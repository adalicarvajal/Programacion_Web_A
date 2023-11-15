import { TYPES } from "../acciones/accionesCarrito";

export const compraIncialState ={
    products:[
        {id:1,name:"COSTA", des:"Atacames - Carcelen", horario:"10:30 - 15:30",price:10},
        {id:2,name:"COSTA",des:"Atacames - Cuenca",horario:"17:30",price:20},
        {id:3,name:"COSTA",des:"Atacames - Manta",horario:"21:30",price:30},
        {id:4,name:"SIERRA", des:"Carcelen - Lago Agrio",horario:"23:00", price:40},
        {id:5,name:"SIERRA",des:"Carcelen - El Coca",horario:"21:30",price:50},
        {id:6,name:"SIERRA",des:"Valle - Lago Agrio",horario:"21:45",price:60},
        {id:7,name:"AMAZONIA", des:"Lago Agrio - Calderon", horario:"15:30",price:40},
        {id:8,name:"AMAZONIA",des:"Huaquillas - Carcelen",horario:"20:00",price:50},
        {id:9,name:"AMAZONIA",des:"Misahualli - Quito",horario:"16:30",price:60},
    ],
  
    cart:[],
}



export function compraReducer(state,action){
    switch (action.type) {
       case TYPES.ADD_TO_CART:{
        let newItem=state.products.find((product) => product.id === action.payload);
        let iteminCart = state.cart.find((item) => item.id === newItem.id);

        return iteminCart ? {
            ...state,
            cart:state.cart.map(item => item.id===newItem.id ? {...item, quantity:item.quantity + 1}:item),

        }:{ 
            ...state,
            cart:[...state.cart, {...newItem,quantity:1}],
        };
    
       }
       case TYPES.REMOVE_ONE_FROM_CART:{
        let itemtoDelete = state.cart.find((item) => item.id === action.payload);

        return itemtoDelete.quantity > 1 ? {
            ...state,
            cart:state.cart.map((item) => item.id === action.payload ? {...item, quantity:item.quantity-1}:item),
        }: {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        }
       }
       case TYPES.REMOVE_ALL_FROM_CART:{
        return{
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        }
       }
       case TYPES.CLEAR_CART:
        return compraIncialState;

       
       default:
        return state;
    }
}