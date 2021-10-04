import React from "react";
import "./Header.css";
import image from "../../image/background.jpg";
import image2 from "../../image/img2.jpg";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div className="container-fluid header-img">
			<div className="row  ">
				<div className="col-md-6  header-right  ">
					<h2>
						WELCOME TO <span className="text-danger">KIDS</span> UNIVERSITY
					</h2>
					<small>
						"Do not confine your children to your own learning, for they were
						born in another time"
					</small>
					<br />

					<div className="input-group w-50 pt-3">
						<input
							className=" form-control"
							placeholder="Enter Your Mail "
							type="text"
						/>
						<button className="btn btn-danger ms-2 ">Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
