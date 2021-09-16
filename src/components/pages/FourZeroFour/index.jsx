import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
const FourZeroFour = () => {
	return (
		<div className="four-zero-four">
			<div className="wrapper">
				<h1>404</h1>
				<h3>This page doesn't exist</h3>

				<h4>
					Try going back to the <a href="/">homepage</a>, if you can't find what
					you're looking for.
				</h4>

				<p>
					{" "}
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
						DON'T CLICK ME
					</a>{" "}
				</p>
			</div>
		</div>
	);
};

export default FourZeroFour;
