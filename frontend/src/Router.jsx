import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Crypto from "./components/crypto/Crypto";

const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact element={<Home />} />
				<Route path="/crypto" element={<Crypto />} />
			</Switch>
		</BrowserRouter>
	);
};

export default SiteRouter;
