import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Crypto from "./components/crypto/Crypto";

const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/crypto" element={<Crypto />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SiteRouter;
