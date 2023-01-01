// export const addToCart = (product) => ({type:ADD_TO_CART,payload:{product}})
// export const removeFromCart = (product) => ({type:REMOVE_FROM_CART,payload:{product}})

const cartReducer =(state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            return{
                ...state, cart:[...state.cart, {...action.payload,qty:1}]
            }
        }
        case "REMOVE_FROM_CART":{
            return{
                ...state, cart:state.cart.filter((p) => p.id !== action.payload.id)
            }
        }
        case "CHANGE_PRODUCT_QTY":{
            return{
                ...state, cart:state.cart.filter(p => p.id === action.payload.id ? (p.qty = action.payload.qty) : p.qty)
            }
        }


        default:
            return state
    }

}

export default cartReducer