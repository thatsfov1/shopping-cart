import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Rating from "../Rating/Rating.jsx";
import {CartState} from "../../Context/Context.jsx";

const Filters = () => {

    const {productState: {byStock,
        byFastDelivery,
        sort,
        byRating},productDispatch} = CartState()

    return <div className="filtersContainer">
        <h1>Filters</h1>
        <span>
            <Form.Check
            inline
            type={"radio"}
            name="group1"
            label="From Low to High"
            id="inline-1"
            onChange={()=> productDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh"
            })}
            checked={sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"radio"}
            name="group1"
            label="From High to Low"
            id="inline-2"
            onChange={()=> productDispatch({
                type:"SORT_BY_PRICE",
                payload:"highToLow"
            })}
            checked={sort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"checkbox"}
            name="group1"
            label="Include Out of Stock"
            id="inline-3"
            onChange={()=> productDispatch({
                type:"FILTER_BY_STOCK",
            })}
            checked={byStock}
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"checkbox"}
            name="group1"
            label="Fast Delivery Only"
            id="inline-4"
            onChange={()=> productDispatch({
                type:"FILTER_BY_DELIVERY",
            })}
            checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rating={byRating} onClick={(i)=> productDispatch({
                type:"FILTER_BY_RATING",
                payload:i+1
            }) } style={{cursor:'pointer'}}/>
        </span>

        <Button variant="light" onClick={()=> productDispatch({
            type:"CLEAR_ALL_FILTERS"
        })}>Clear Filters</Button>
    </div>;
}

export default Filters;
