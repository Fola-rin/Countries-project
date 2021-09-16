import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
	fetchAllCountries,
	fetchCountries,
	fetchRegion,
	fetchCountry,
} from "../../../redux";
import { CountryCardLoading, CountryCard } from "../../CountryCard";
import SearchFilterComp from "../../SearchFilterComp";

import "./style.scss";

const Region = ({ match, history }) => {
	useEffect(() => {
		dispatch(fetchRegion(match.params.region));
	}, [match?.params?.region]);

	const [loading, setLoading] = useState(true);

	const regionData = useSelector((state) => state.region);

	const region = regionData.data;
	console.log("see me", region.loading);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchRegion("africa"));
	// }, []);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	useEffect(() => {
		if (regionData.error && !regionData.loading) {
			history.replace("/404");
		}
	}, [regionData]);

	const internationalNumberFormat = new Intl.NumberFormat("en-US");

	return (
		<div>
			<SearchFilterComp />
			<div className="countries-grid">
				{regionData.loading ? (
					<>
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
					</>
				) : (
					region.length &&
					region.map((country, id) => (
						<CountryCard
							key={id}
							imgSrc={country.flag}
							countryName={country.name}
							population={internationalNumberFormat.format(country.population)}
							region={country.region}
							capital={country.capital}
						>
							{" "}
							{country.name}
						</CountryCard>
					))
				)}
			</div>
		</div>
	);
};

export default Region;
