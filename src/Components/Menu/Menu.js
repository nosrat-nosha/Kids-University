import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<div>
			<Navbar className="menu-container  " expand="lg">
				<Container className="">
					<Navbar.Brand>
						<i class="fas fa-child text-white"></i>
						<span className="text-danger ms-1 ">Kids</span>{" "}
						<span className="text-white">University</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						{" "}
						<i className="fas fa-bars toggle-button"></i>{" "}
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className=" nav-text ">
							<Link className="li text-white" to="/home">
								Home
							</Link>
							<Link className="li text-white" to="/about">
								About
							</Link>
							<Link className="li text-white" to="/services">
								Services
							</Link>
							<Link className="li text-white" to="/contact us">
								Contact Us
							</Link>
							<Link className="li text-white" to="*">
								Policy
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
