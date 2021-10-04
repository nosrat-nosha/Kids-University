// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Error from "./Components/Error/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/services">
						<Services></Services>
					</Route>
					<Route exact path="/about">
						<About></About>
					</Route>
					<Route exact path="/contact us">
						<Contact></Contact>
					</Route>
					<Route exact path="*">
						<Error></Error>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
