import React, { useState, useEffect } from "react";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import "./style.scss";
import { Link } from "react-router-dom";
// import axios from 'axios';
const Header = () => {
	const [theme, setTheme] = useState(true);

	// axios.get("https://restcountries.eu/rest/v2/name/Ni").then((response) => console.log(response.data))

	const themeTogller = () => {
		if (theme) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
		setTheme(!theme);
	};
	useEffect(() => {
		if (localStorage.theme) {
			const theme = JSON.parse(localStorage.getItem("theme"));
			setTheme(theme);

			if (!theme) {
				document.body.classList.add("dark-mode");
			} else {
				document.body.classList.remove("dark-mode");
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<div className="header">
			<h3>
				<Link to="/">Where in the world?</Link>
			</h3>
			<div onClick={() => themeTogller()} className="theme-toggler">
				{theme ? (
					<Brightness2OutlinedIcon className="icon" />
				) : (
					<Brightness2Icon className="icon" />
				)}
				<span>{theme ? "Dark Mode" : "Light Mode"}</span>
			</div>
		</div>
	);
};

export default Header;
