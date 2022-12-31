import React from "react";
import {Button, Card} from "react-bootstrap";
import {FiShoppingCart} from "react-icons/fi";
import Rating from "../Rating/Rating.jsx";
import {CartState} from "../../Context/Context.jsx";

const SingleContent = ({prod}) => {

    const { state:{ cart },dispatch } = CartState()

    return <div style={{margin:10}}>
        <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>{prod.price.split(".")[0]} ₴</span>
                    {prod.fastDelivery ? <div>Fast Delivery</div> : <div>2 days Delivery </div>}
                    <Rating rating={prod.ratings}/>
                </Card.Subtitle>

                {cart.some(p=> p.id === prod.id) ? (
                    <Button onClick={()=> {
                        dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:prod
                        })
                    }} variant="danger"><FiShoppingCart/> Remove from Cart</Button>
                ) : (
                    <Button onClick={()=> {
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:prod
                        })
                    }} variant="primary" disabled={prod.inStock == 0}><FiShoppingCart/> {
                        prod.inStock == 0 ? "Out of Stock" : "Add to Cart"
                    }</Button>
                )
                }



            </Card.Body>
        </Card>
    </div>;
}

export default SingleContent;
