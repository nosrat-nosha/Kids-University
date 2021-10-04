import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="container-fluid header-bg nav-bg text-white ">
			<div className="container ">
				<div className="row">
					<div className="col-lg-6 header-logo">
						<h6>
							<span className="text-danger">Kids</span> University
						</h6>
					</div>
					<div className="col-lg-6  nav-list ">
						<NavLink className="li" to="/home">
							Home
						</NavLink>
						<NavLink className="li" to="/about">
							About
						</NavLink>
						<NavLink className="li" to="/services">
							Services
						</NavLink>
						<NavLink className="li" to="/contact us">
							Contact US
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
