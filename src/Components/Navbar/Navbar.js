import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="container-fluid header-bg bg-dark text-white top-fixed">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 header-logo">
						<h6>Header</h6>
					</div>
					<div className="col-lg-6  nav-list ">
						<li>Home</li>
						<li>About</li>
						<li>Services</li>
						<li>policy</li>
						<li>Contact</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
