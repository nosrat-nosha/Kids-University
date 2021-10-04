import React from "react";
import "./About.css";
import image from "../../image/img2.jpg";

const About = () => {
	return (
		<div>
			<div className="row about-container m-5">
				<div className="row text-center p-5">
					<h1>
						ABOUT <span className="text-danger">US</span>{" "}
					</h1>
					<hr />
				</div>
				<div className="col-lg-6 ">
					<img src={image} alt="" />
				</div>
				<div className="ml-5 col-lg-6">
					<p className="p-3">
						Our aim is the pursuit of excellence for all. We strive for the
						development of individual potential in a stimulating and inspiring
						school that is at the heart of the local community. Cheam High
						School aims to create a welcoming and exciting learning environment
						where we: Provide a rich, diverse and challenging education through
						excellent and innovative teaching and learning. Celebrate success,
						promote a "can do" attitude and inspire each to achieve their best.
						Support personal development, social responsibility and a sense of
						self-worth. Develop the attitudes and skills that support a healthy
						and fulfilled life together with the confidence for a lifetime of
						learning. Work as partners in learning with students, parents/carers
						and the community. Provide a safe, supportive and well-ordered
						environment where students and staff are happy and confident as they
						aspire to achieve.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
