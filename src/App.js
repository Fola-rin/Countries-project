import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Detail from "./components/pages/Detail";
import Home from "./components/pages/Home";
import Region from "./components/pages/Region";

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/countries/:country" component={Detail} />
					<Route exact path="/regions/:region" component={Region} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
