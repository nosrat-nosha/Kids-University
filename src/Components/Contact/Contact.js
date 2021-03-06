import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Contact.css";
import { Col, Form, Row } from "react-bootstrap";

const Contact = () => {
	return (
		<div className="h-50 mt-5">
			<div className="row text-center">
				<h2>
					<span className="text-danger mt-5">CONTACT</span> US
				</h2>
				<hr />
			</div>
			<Form className="p-5 mx-auto w-75 ">
				<Row className="mb-3">
					<Form.Group as={Row} controlId="formGridCity">
						<Form.Label>Name</Form.Label>

						<Form.Control placeholder="Enter Your Name" />
					</Form.Group>
					<Form.Group as={Row} controlId="formGridCity">
						<Form.Label>Email</Form.Label>
						<Form.Control placeholder="Enter Your Email" />
					</Form.Group>
					<Form.Group as={Row} controlId="formGridCity">
						<Form.Label>Adress</Form.Label>
						<Form.Control placeholder="Adress" />
					</Form.Group>

					<Form.Group as={Row} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control placeholder="Zip" />
					</Form.Group>
					<Form.Group as={Row} controlId="formGridPassword ">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<button className="btn btn-danger" type="submit">
					Submit
				</button>
			</Form>
		</div>
	);
};

export default Contact;
