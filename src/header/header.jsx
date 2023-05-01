import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.jpg';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const menus = [
    {
        name: 'Home',
        url: '/home',
    },
    {
        name: 'Educations',
        url: '/edu',
    },
    {
        name: 'Projects',
        url: '/project'
    },
    {
        name: 'Administrations',
        url: '/admi',
    },
    {
        name: 'Internships',
        url: '/intern',
    },
    ];

const navItems = menus.map(menu => {
    return (
        <Nav.Link as={Link} key={menu.name} to={menu.url}>{menu.name}</Nav.Link>
        );
});

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container-fluid">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" width="50" className="d-inline-block align-top" style={{ borderRadius: '8%' }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown"/>
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="ms-auto">
                        {navItems}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        );
};
