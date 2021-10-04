import React, { useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import "./MainSection.css";

const MainSection = () => {
	//useState for teacher
	const [teachers, setTeachers] = useState([]);
	// useEffect for teacher
	useEffect(() => {
		fetch("./teachers.JSON")
			.then((res) => res.json())
			.then((data) => setTeachers(data));
	}, []);
	//useState for service body
	const [serviceBodys, setServiceBodys] = useState([]);

	// useEffect for services body
	useEffect(() => {
		fetch("./serviceBody.JSON")
			.then((res) => res.json())
			.then((data) => setServiceBodys(data));
	}, []);

	return (
		<div className=" container-fluid ">
			{/* teacher section  */}
			<div className="teacher-container p-3 mt-5">
				<div className=" container ">
					<div className="row mt-5">
						<div className=" col-12 text-center">
							<h2 className="text-white">Our Teacher Section</h2>
						</div>
						{teachers?.map((teacher) => (
							<div className="col-md-4 full-cart p-5 ">
								<div className="cart-body  teacher-body  shadow-lg">
									<div className="img-fluid  teacher-img">
										<Image src={teacher.img} alt="" />
									</div>
									<div className="p-3">
										<h4 className="">Name: {teacher.name}</h4>
										<h5 className="">Subject:{teacher.subject}</h5>
										<p className="">Slary:{teacher.salary}</p>
										<p className="">Age:{teacher.age}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* services section  */}
			<div className="container-fluid service-body">
				<div className="row">
					<div className="text-center p-5">
						<h2>Our Services </h2>
					</div>
					{serviceBodys?.map((serviceBody) => (
						<div className="col-md-3 ">
							<div className="cart">
								<div className="img-fluid img-service">
									<img src={serviceBody.img} alt="" />
								</div>
								<div className="">
									<h4 className="text-center p-3"> {serviceBody.name}</h4>
									<hr />
									<p className="description-p p-3">
										{" "}
										{serviceBody.description}
									</p>
									<hr />
									<div className="justify-content-center  p-3">
										<Button variant="btn btn-danger "> See More</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainSection;
