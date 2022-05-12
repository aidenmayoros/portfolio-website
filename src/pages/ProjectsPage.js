import "../styles/projectsPage.css";
import projects from "../data/projects";

export default function ProjectsPage() {
	return (
		<div className='projectsMainContainer' style={{ backgroundColor: "black" }}>
			<div className='projetsParent'>
				{projects.map((project, i) => {
					return (
						<div key={i}>
							<h3 className='projectHeaders'>{project.projectName}</h3>
							<img
								style={{ width: "350px", height: "250px" }}
								src={project.img}
								alt='Project image'></img>
						</div>
					);
				})}
			</div>
		</div>
	);
}
