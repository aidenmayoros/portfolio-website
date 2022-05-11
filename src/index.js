import React from "react";
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	withRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
