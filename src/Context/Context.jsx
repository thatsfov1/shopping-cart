import React, {createContext, useContext, useReducer} from "react";
import {faker} from "@faker-js/faker";
import cartReducer from "./CartReducer.js";

const Cart = createContext()

const Context = ({children}) => {

    const products = [...Array(30)].map(()=>({
        id:faker.datatype.uuid(),
        department:faker.commerce.department(),
        price:faker.commerce.price(50,50000),
        name:faker.commerce.product(),
        image:faker.image.image(250,200),
        inStock:faker.helpers.arrayElements([0,14,2,9],1),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.helpers.arrayElements([1,2,3,4,5],1)
    }))

    const [state,dispatch] = useReducer(cartReducer,{
        products:products,
        cart:[]
    })

    return <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>;
}

export default Context;

export const CartState =()=>{
    return useContext(Cart)
}