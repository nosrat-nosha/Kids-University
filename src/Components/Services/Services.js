import React, { useState, useEffect } from "react";

const Services = () => {
	//useState for teacher
	const [services, setServices] = useState;

	// useEffect for services
	useEffect(() => {
		fetch("./services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="text-center p-5">
						<h2>Our Services </h2>
					</div>
					{services?.map((service) => (
						<div className="col-md-3">
							<div className="cart">
								<div className="img-fluid img-service">
									<img src={service.img} alt="" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
