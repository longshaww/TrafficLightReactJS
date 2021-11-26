import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import TrafficLight from "./Components/traffic-light";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TrafficLight />
			</div>
		);
	}
}

export default App;
