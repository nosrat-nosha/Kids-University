import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

const Footer = () => {
	return (
		<div>
			<div className="container-fluid footer-container  text-white footer-margin ">
				<div className="container-fluid p-3">
					<div className="row text-center  ">
						<div className="col-md-12">
							<p className="  footer-icon">
								<h4 className="mb-3   ">
									Follow <span className="">Us</span>{" "}
								</h4>
								<i class="fab fa-facebook-square p-2 "></i>
								<i className="fab fa-linkedin p-2"></i>
								<i className="fab fa-instagram-square p-2"></i>
								<i className="fab fa-youtube p-2"></i>
								<div className="footer-nav fs-5">
									<NavLink className="li footer-li" to="/home">
										Home
									</NavLink>
									<NavLink className="li footer-li" to="/about">
										About
									</NavLink>
									<NavLink className="li footer-li" to="/services">
										Services
									</NavLink>
									<NavLink className="li footer-li" to="/contact us">
										Contact Us
									</NavLink>
								</div>
								<div className="input-group footer-input mx-auto  ">
									<input
										className="p-1 m-2  form-control"
										placeholder="Enter Your Mail "
										type="text"
									/>
									<button className="btn btn-danger m-2 ">Subscribe</button>
								</div>
								<p className="mt-5">
									Copyright &copy; 2021<i className="fas fa-heart bg-dark"></i>
									All Rights Reserved By Kids University.
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
