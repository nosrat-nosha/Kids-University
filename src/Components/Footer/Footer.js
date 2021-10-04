import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<div
				className="container-fluid footer-bg bg-dark text-white footer-margin "
				fixed="bottom"
			>
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
		</div>
	);
};

export default Footer;
