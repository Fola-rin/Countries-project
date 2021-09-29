import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBorder, fetchCountry } from "../../../redux";
import { Skeleton } from "@material-ui/lab";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import "./style.scss";

const Detail = ({ match, history }) => {
	console.log(match.params.country);
	console.log(history);

	const [countryInfo, setCountryInfo] = useState({});
	// const [borderCountries, setBorderCountries] = useState([]);

	const dispatch = useDispatch();

	const countryData = useSelector((state) => state.country);
	const borders = useSelector((state) => state.borders);

	useEffect(() => {
		dispatch(fetchCountry(match.params.country));
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [match?.params?.country]);

	useEffect(() => {
		setCountryInfo(countryData.data[0]);

		// console.log(countryInfo);
	}, [countryData?.data[0]]);

	useEffect(() => {
		if (countryInfo.borders) {
			dispatch(fetchBorder(countryInfo.borders));
		}
	}, [countryInfo?.borders]);
	const internationalNumberFormat = new Intl.NumberFormat("en-US");

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	useEffect(() => {
		if (countryData.error && !countryData.loading) {
			history.replace("/404");
		}
	}, [countryData]);

	console.log("lol", borders);

	return (
		<>
			{countryData.loading ? (
				<div className="detail-container">
					<div className="back-btn-div">
						<button onClick={() => history.goBack()}>
							<KeyboardBackspaceIcon />
							<span>Back</span>
						</button>
					</div>
					<div className="detail-wrapper">
						<div className="img-wrapper">
							{/* <img
								src={countryInfo.flag}
								alt={`The Flag of ${countryInfo.name}`}
							/> */}
							<Skeleton />
						</div>
						<div className="text-wrapper">
							<h1>
								<Skeleton />
							</h1>
							<div className="details">
								<div className="left-tab">
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
								</div>
								<div className="right-tab">
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
									<p>
										<Skeleton />
									</p>
								</div>
							</div>
							<div className="border">
								<p>
									<Skeleton />
								</p>
								<p>
									<Skeleton />
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				countryInfo && (
					<div className="detail-container">
						<div className="back-btn-div">
							<button onClick={() => history.goBack()}>
								<KeyboardBackspaceIcon />
								<span>Back</span>
							</button>
						</div>
						<div className="detail-wrapper">
							<div className="img-wrapper">
								<img
									src={countryInfo.flag}
									alt={`The Flag of ${countryInfo.name}`}
								/>
							</div>
							<div className="text-wrapper">
								<h1>{countryInfo.name}</h1>
								<div className="details">
									<div className="left-tab">
										<p>
											Native Name: <span>{countryInfo.nativeName}</span>
										</p>
										<p>
											Population:{" "}
											<span>
												{internationalNumberFormat.format(
													countryInfo.population
												)}
											</span>
										</p>
										<p>
											Region: <span>{countryInfo.region}</span>
										</p>
										<p>
											Sub Region: <span>{countryInfo.subregion}</span>
										</p>
										<p>
											Capital: <span>{countryInfo.capital}</span>
										</p>
									</div>
									<div className="right-tab">
										<p>
											Top Level Domain:{" "}
											{countryInfo.topLevelDomain &&
												countryInfo.topLevelDomain.map(
													(domain, index, domains) => (
														<span key={index}>
															{domain}{" "}
															{domains.length === 1 ||
															domains.length === index + 1
																? null
																: " , "}
														</span>
													)
												)}
										</p>
										<p>
											Population:{" "}
											<span>
												{internationalNumberFormat.format(
													countryInfo.population
												)}
											</span>
										</p>
										<p>
											Currency:{" "}
											{countryInfo.currencies &&
												countryInfo.currencies.map(
													(currency, index, currencies) => (
														<span key={index}>
															{currency.name} ({currency.symbol})
															{currencies.length === 1 ||
															currencies.length === index + 1
																? null
																: " , "}
														</span>
													)
												)}
										</p>
										<p>
											Languages:{" "}
											{countryInfo.languages &&
												countryInfo.languages.map(
													(language, index, languages) => (
														<span key={index}>
															{language.name}
															{languages.length === 1 ||
															languages.length === index + 1
																? null
																: " , "}
														</span>
													)
												)}
										</p>
									</div>
								</div>
								<div className="border">
									<p>
										<span className="sub-title">Border Countries:</span>{" "}
										{borders.data.length &&
											borders.data.map((border, index) => {
												return (
													<Link to={`/countries/${border.name}`} key={index}>
														<span>{border.name}</span>{" "}
													</Link>
												);
											})}
									</p>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</>
	);
};

export default Detail;
