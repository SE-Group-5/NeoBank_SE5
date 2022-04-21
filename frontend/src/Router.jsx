import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Crypto from "./components/crypto/Crypto";
import CardHome from "./CardManagement/CardHome";

const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact element={<Home />} />
				<Route path="/crypto" element={<Crypto />} />
				<Route path="/card" element={<CardHome />} />
			</Switch>
		</BrowserRouter>
	);
};

export default SiteRouter;
