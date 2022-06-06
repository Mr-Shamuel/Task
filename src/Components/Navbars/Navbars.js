import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbars.css';
 
const Navbars = () => {




    return (
        <div className="">
            {/* Navbar start here  */}




            <Navbar expand="sm" className="nav_bar py-2">


                

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mx-4 my-3 ">

                            <NavLink className="p-2 mx-3 " style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/search">Search</NavLink>
                            {/* <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/categories">Categories </NavLink> */}
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/login">Login </NavLink>
                            <NavLink className="p-2 mx-3" style={{ textDecoration: 'none' }} to="/register">Register </NavLink>
                           

                             

                        </Nav>
                    </Navbar.Collapse>

 

            </Navbar>









        </div>
    );
};

export default Navbars;