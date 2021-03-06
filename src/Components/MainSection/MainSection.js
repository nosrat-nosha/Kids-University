import React, { useEffect, useState } from "react";
import { Image, Button, NavLink, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
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
							<h2 className="text-white">
								<span className="text-danger">TEACHERS </span>SECTION
								<hr />
							</h2>
						</div>
						{teachers?.map((teacher) => (
							<div className="col-md-4 full-cart p-4 mx-auto ">
								<p className="d-none">{teacher.id}</p>
								<div className="cart-body  teacher-body text-white shadow-lg">
									<div className="   teacher-img">
										<img className="img-fluid" src={teacher.img} alt="" />
									</div>
									<div className="p-3 fw-bold">
										<h4 className="text-secondary">Name : {teacher.name}</h4>
										<hr />
										<p className="">Subject : {teacher.subject}</p>
										<p className="">Salary : {teacher.salary}</p>
										<p className="">Gender : {teacher.gender}</p>
										<p className="">Age : {teacher.age}</p>
										<Link to="/services">
											<button className="btn btn-danger">
												See More <i class="fas fa-arrow-right ms-2"></i>
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* service Body section  */}
			<div className="container-fluid mx-auto service-body mt-5">
				<div className="row">
					<div className="text-center  ">
						<h2>
							OUR <span className="text-danger">SERVICES</span> <hr />
						</h2>
					</div>
					{serviceBodys?.map((serviceBody) => (
						<div className="col-md-3 full-cart   mx-auto ">
							<div className="cart mb-3 ">
								<p className="d-none">{serviceBody.key}</p>
								<div className="img-fluid img-service">
									<img src={serviceBody.img} alt="" />
								</div>
								<div className="">
									<h4 className="text-center text-danger  p-3">
										{serviceBody.name}
									</h4>
									<hr />
									<p className="description-p p-3">{serviceBody.description}</p>
									<hr />
									<div className="justify-content-center  p-3">
										<Link to="/services">
											<Button variant="btn btn-danger ">
												See More <i class="fas fa-arrow-right ms-2"></i>
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Gallery section  */}
			<div className="">
				<div className="gallery-container p-3  mt-5">
					<div className=" container ">
						<div className="row mt-5">
							<div className=" col-12 text-center">
								<h2 className="text-white">
									<span className="text-danger">PHOTO </span>GALLERY
									<hr />
								</h2>
							</div>
							{teachers?.map((teacher) => (
								<div className="col-md-4 full-cart p-4 mx-auto ">
									<p className="d-none">{teacher.id}</p>
									<div className="cart-body  teacher-body text-white shadow-lg">
										<div className="   teacher-img">
											<img className="img-fluid" src={teacher.img} alt="" />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
