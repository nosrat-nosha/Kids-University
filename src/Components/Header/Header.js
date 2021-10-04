import React from "react";
import "./Header.css";
import image from "../../image/background.jpg";
import image2 from "../../image/img2.jpg";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div className="container-fluid header-img">
			<div className="row  ">
				<div className="col-md-8 header-left">
					<h1>This is header</h1>
				</div>
				<div className="col-md-4  header-right">
					<h2>Education is the Backboon of nation</h2>
					<Button className="btn btn-danger">Read More</Button>
					{/* <img src={image2} alt="" /> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
