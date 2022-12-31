import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import Rating from "../Rating/Rating.jsx";

const Filters = () => {

    const [rate,setRate]  = useState(3)

    return <div className="filtersContainer">
        <h1>Filters</h1>
        <span>
            <Form.Check
            inline
            type={"radio"}
            name="group1"
            label="From Low to High"
            id="inline-1"
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"radio"}
            name="group1"
            label="From High to Low"
            id="inline-2"
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"checkbox"}
            name="group1"
            label="Include Out of Stock"
            id="inline-3"
            />
        </span>
        <span>
            <Form.Check
            inline
            type={"checkbox"}
            name="group1"
            label="Fast Delivery Only"
            id="inline-4"
            />
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rating={rate} onClick={(i)=> setRate(i+1)} style={{cursor:'pointer'}}/>
        </span>

        <Button variant="light">Clear Filters</Button>
    </div>;
}

export default Filters;
