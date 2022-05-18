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
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/weather_forecast' element={<ContactPage />} />
				<Route path='/image_carousel' element={<ContactPage />} />
				<Route path='/dnd_character' element={<ContactPage />} />
				<Route path='/calculator' element={<ContactPage />} />
				<Route path='/mortgage_calculator' element={<ContactPage />} />
				<Route path='/tic-tac-toe' element={<ContactPage />} />
				<Route path='/world_clock' element={<ContactPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
