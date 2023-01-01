import React from "react";
import {Badge, Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {CartState} from "../../Context/Context.jsx";
import {AiFillDelete} from "react-icons/ai";

const Header = (props) => {

    const {state:{cart},dispatch} = CartState()

    return <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand >
                <NavLink to={'/'}>MY SNEAKERS</NavLink>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    style={{width:400}}
                    className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="light">
                    <FiShoppingCart fontSize="20px"/>
                    <Badge bg="outline-light" text="dark">{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:350}}>
                        {cart.length > 0 ? (
                            <>
                                {cart.map(prod => (
                                    <span className="cartProduct" key={prod.id}>
                                <div className="cartProductImg">
                                    <img src={prod.image} alt={prod.name}/>
                                </div>
                                <div className="cartProductTitle">
                                    <span>{prod.name}</span>
                                    <span>{prod.price.split(".")[0]} ₴</span>
                                </div>
                                <div>
                                    <AiFillDelete
                                        fontSize="20px"
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod
                                            })
                                        }}
                                        style={{cursor: "pointer"}}
                                    />
                                </div>
                            </span>
                                ))}
                                <NavLink to="/cart">
                                    <Button style={{width:"95%", margin:"0 10px"}}>Go to Cart</Button>
                                </NavLink>
                            </>
                            )

                            : <span style={{padding:10}}>Cart is empty </span>
                        }

                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>;
}

export default Header;
