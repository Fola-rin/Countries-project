import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
	fetchAllCountries,
	// fetchCountries,
	// fetchRegion,
	// fetchCountry,
} from "../../../redux";
import { CountryCard, CountryCardLoading } from "../../CountryCard";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./style.scss";
import SearchFilterComp from "../../SearchFilterComp";

const Home = () => {
	const allCountriesData = useSelector((state) => state.allCountries);

	const allCountries = allCountriesData.data;
	console.log(allCountries.length);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllCountries());
	}, []);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const internationalNumberFormat = new Intl.NumberFormat("en-US");

	return (
		<div>
			<SearchFilterComp />
			<div className="countries-grid">
				{allCountriesData.loading ? (
					<>
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
						<CountryCardLoading />
					</>
				) : (
					allCountries.length &&
					allCountries.map((country, id) => (
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

export default Home;
