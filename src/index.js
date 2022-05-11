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
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
