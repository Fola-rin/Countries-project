import React, { useState, useEffect, useRef } from "react";
import { useOuterClick } from "react-outer-click";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Skeleton } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

import notfoundImg from "../../assets/notfound.png";

import "./style.scss";

import { fetchCountries } from "../../redux";
import CountryCard from "../CountryCard";

const SearchFilterComp = () => {
	const dispatch = useDispatch();
	const countries = useSelector((state) => state.countries);

	const searchRef = useRef(null);

	const countriesData = countries.data;
	const countriesError = countries.error;

	console.log("fire", countriesError);

	// useOuterClick(searchRef, (event) => {
	// 	event.preventDefault();
	// 	console.log("Clicked outside");
	// });

	const [filterOpen, setFilterOpen] = useState(false);
	const [searchString, setSearchString] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(countries.loading);
	}, [countries?.loading]);
	return (
		<div className="search-filter-container">
			<div className="search-box-wrapper" ref={searchRef}>
				<div className="search-box">
					<input
						type="text"
						onChange={(e) => {
							setSearchString(e.target.value);
							// setLoading(true);
							if (e.target.value !== "") {
								dispatch(fetchCountries(e.target.value));
							}
						}}
						value={searchString}
						placeholder="Search for a country..."
					/>
					<div className="search-icon">
						<SearchIcon />
					</div>
				</div>
				<div className="search-box-list">
					{loading && searchString !== "" ? (
						<div className="country-search">
							<div className="img-wrapper">
								<Skeleton animation="wave">
									{/* <img src="" alt="country not found" /> */}
								</Skeleton>
							</div>
							<p animation="wave">
								<Skeleton />
							</p>
						</div>
					) : countriesError !== "" && searchString !== "" ? (
						<div className="country-search">
							<div className="img-wrapper">
								<img src={notfoundImg} alt="" />
							</div>
							<p>Country not found</p>{" "}
						</div>
					) : (
						countriesData.length &&
						searchString !== "" &&
						countriesData.map((country) => (
							<div className="country-search">
								<div className="img-wrapper">
									<img src={country.flag} alt={"flag of " + country.name} />
								</div>
								<p>{country.name} </p>{" "}
								<Link to={`/countries/${country.name}`} />
							</div>
						))
					)}
				</div>
			</div>
			<div className="filter-region-wrapper">
				<div
					className="filter-header"
					onClick={() => setFilterOpen(!filterOpen)}
				>
					<h4>Filter by region</h4>
					<ExpandMoreIcon />
				</div>

				{filterOpen && (
					<div className="filter-list">
						<h4>
							{" "}
							<Link to={`/regions/Africa`}>Africa </Link>
						</h4>
						<h4>
							{" "}
							<Link to={`/regions/Americas`}>Americas</Link>
						</h4>
						<h4>
							{" "}
							<Link to={`/regions/Asia`}>Asia </Link>
						</h4>
						<h4>
							{" "}
							<Link to={`/regions/Europe`}>Europe </Link>
						</h4>
						<h4>
							{" "}
							<Link to={`/regions/Oceania`}>Oceania </Link>
						</h4>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchFilterComp;