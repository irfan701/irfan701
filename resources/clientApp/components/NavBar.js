import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">

                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/courseplan">Course Plan</NavLink>
                            <NavLink className="nav-link" to="/freeclass">Free Class</NavLink>
                            <NavLink className="nav-link" to="/registration">Registration</NavLink>

                        </Nav>
                    </Container>
                </Navbar>


            </>

    );
};

export default NavBar;
