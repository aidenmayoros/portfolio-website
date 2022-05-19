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
import projects from "./data/projects";
import ProjectDetails from "./components/projectDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/contact' element={<ContactPage />} />
				{projects.map((page, i) => {
					return (
						<Route
							key={page.projectName}
							path={page.pathLink}
							element={<ProjectDetails project={projects[i]} />}></Route>
					);
				})}
			</Routes>
		</Router>
	</>
);
