import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("./services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className="row">
				<h2 className="text-center p-5">
					 ALL <span className="text-danger ">SERVICES</span>{" "}
				</h2>
				{services.map((service) => (
					<div className="row service-container p-5">
						<p className="d-none">{service.key}</p>
						<div className="col-md-4 service-img">
							<img src={service.img} alt="" />
						</div>
						<div className="col-md-8 p-3">
							<h3 className="text-danger">{service.name}</h3>
							<p>{service.description}</p>
							<Link to="/contact us">
								<button className="btn btn-danger">Contact Us</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;

// import React, { useState, useEffect } from "react";

// const Services = () => {
// 	//useState for teacher
// 	const [services, setServices] = useState;

// 	// useEffect for services
// 	useEffect(() => {
// 		fetch("./services.JSON")
// 			.then((res) => res.json())
// 			.then((data) => setServices(data));
// 	}, []);
// 	return (
// 		<div>
// 			<div className="container-fluid">
// 				<div className="row">
// 					<div className="text-center p-5">
// 						<h2>Our Services </h2>
// 					</div>
// 					{services?.map((service) => (
// 						<div className="col-md-3">
// 							<div className="cart">
// 								<div className="img-fluid img-service">
// 									<img src={service.img} alt="" />
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Services;
