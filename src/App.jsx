import React from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className=""><Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes></div>
        </BrowserRouter>

    </div>
  )
}

export default App
