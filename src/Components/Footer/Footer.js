import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

const Footer = () => {
	return (
		<div>
			<div
				className="container-fluid footer-container  text-white footer-margin "
				fixed="bottom"
			>
				<div className="container-fluid bg-dark">
					<div className="row text-center ">
						<div className="col-md-12">
							<p className="p-5  footer-icon">
								<h4 className="mb-3">Follow Us</h4>
								<i className="fab  fa-facebook p-3 "></i>
								<i className="fab fa-linkedin p-3"></i>
								<i className="fab fa-instagram-square p-3"></i>
								<i className="fab fa-youtube p-3"></i>
								<div className="footer-nav fs-5">
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
								<div className="input-group footer-input col-md-12 w-50 ">
									<input
										className="p-1 m-2  form-control"
										placeholder="Enter Your Mail "
										type="text"
									/>
									<button className="btn btn-danger m-2 ">Subscribe</button>
								</div>
								<p>
									Copyright &copy; 2021<i class="fas fa-heart"></i>All Rights
									Reserved Kids University.
								</p>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
