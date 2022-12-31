import React from "react";
import {CartState} from "../../Context/Context.jsx";
import SingleContent from "../SingleContent/SingleContent.jsx";
import '../styles.css'
import Filters from "../Filters/Filters.jsx";

const Home = (props) => {

    const { state:{ products }} =CartState()


    return <div className="home">
        <Filters/>
        <div className="productContainer">
            {products.map(prod => <SingleContent prod={prod} key={prod.id}/>)}
        </div>
    </div>;
}

export default Home;
