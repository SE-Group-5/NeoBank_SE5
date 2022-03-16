import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const SiteRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SiteRouter;
