import React, { Component } from "react";
import "./traffic-light.css";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
	constructor() {
		super();
		this.state = { currentColor: GREEN };
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			// console.log(this.state.currentColor);
			this.run();
		}, 2000);
	}
	run() {
		this.setState({
			currentColor: this.getNextColor(this.state.currentColor),
		});
	}
	getNextColor(color) {
		switch (color) {
			case RED:
				return ORANGE;
			case ORANGE:
				return GREEN;
			default:
				return RED;
		}
	}
	render() {
		const { currentColor } = this.state;
		// console.log("Rendering", currentColor);
		return (
			<div className="TrafficLight">
				<div
					className={classNames("bulb", "red", {
						active: currentColor === RED,
					})}
				></div>
				<div
					className={classNames("bulb", "orange", {
						active: currentColor === ORANGE,
					})}
				></div>
				<div
					className={classNames("bulb", "green", {
						active: currentColor === GREEN,
					})}
				></div>
			</div>
		);
	}
}

export default TrafficLight;
