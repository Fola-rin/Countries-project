import React from "react";

import "./style.scss";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className="footer">
			<p>
				© {date} Made by{" "}
				<a href="https://folarin.netlify.app">Oyeleke Afolarin</a>
			</p>
		</div>
	);
};

export default Footer;
