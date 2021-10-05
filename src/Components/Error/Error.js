import React from "react";
import "./Error.css";

const Error = () => {
	return (
		<div className="row  text-center error-text text-danger">
			<div className="col-md-8  w-75 mx-auto">
				<h2 className="p-5 mt-5 mb-5 shadow-lg ">
					404 - <span>Page Not Found</span>
				</h2>
			</div>
		</div>
	);
};

export default Error;
