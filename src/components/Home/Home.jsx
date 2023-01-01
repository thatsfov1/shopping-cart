import React from "react";
import {CartState} from "../../Context/Context.jsx";
import SingleContent from "../SingleContent/SingleContent.jsx";
import '../styles.css'
import Filters from "../Filters/Filters.jsx";

const Home = (props) => {

    const { state:{ products },productState:{byStock,
        byFastDelivery,
        sort,
        searchQuery,
        byRating}} =CartState()

    const transformProducts =() =>{
        let sortedProducts = products

        if(sort){
            sortedProducts = sortedProducts.sort((a,b) =>
                sort ==="lowToHigh" ?
                a.price - b.price : b.price - a.price)
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter(prod => prod.inStock)
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter(prod => prod.fastDelivery)
        }
        if(byRating){
            sortedProducts = sortedProducts.filter(prod => prod.ratings >= byRating)
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts
    }

    return <div className="home">
        <Filters/>
        <div className="productContainer">
            {transformProducts().map(prod => <SingleContent prod={prod} key={prod.id}/>)}
        </div>
    </div>;
}

export default Home;
