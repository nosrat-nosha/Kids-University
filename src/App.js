// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
	return (
		<div className="App">
			{/* <Navbar></Navbar>
			<MainSection></MainSection>
			<Footer></Footer> */}
			<Router>
				<Navbar></Navbar>
				<Router>
					<Header></Header>
				</Router>
				<Route>
					<MainSection></MainSection>
				</Route>
				<Footer></Footer>
				<Switch></Switch>
			</Router>
		</div>
	);
}

export default App;
