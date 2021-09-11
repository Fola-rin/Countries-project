import React from "react";
import { Link } from "react-router-dom";

import { Skeleton } from "@material-ui/lab";

import "./style.scss";

export const CountryCard = ({
	imgSrc,
	countryName,
	population,
	region,
	capital,
}) => {
	return (
		<div className="country-card">
			<div className="img-wrapper">
				<img src={imgSrc} alt={countryName} />
				<Link to={`/countries/${countryName}`} />
			</div>
			<div className="text-wrapper">
				<h4>
					<Link to={`/countries/${countryName}`}>{countryName}</Link>
				</h4>
				<p className="small-text">
					Population: <span>{population}</span>
				</p>
				<p className="small-text">
					Region: <span>{region}</span>
				</p>
				<p className="small-text">
					Capital: <span>{capital}</span>
				</p>
			</div>
		</div>
	);
};

export const CountryCardLoading = () => (
	<div className="country-card">
		<div className="img-wrapper">
			<Skeleton animation="wave" />
		</div>
		<div className="text-wrapper">
			<h4>
				<Skeleton animation="wave" />
			</h4>
			<p className="small-text">
				<Skeleton animation="wave" />
			</p>
			<p className="small-text">
				<Skeleton animation="wave" />
			</p>
			<p className="small-text">
				<Skeleton animation="wave" />
			</p>
		</div>
	</div>
);
