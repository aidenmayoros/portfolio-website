import projects from "../data/projects";

export default function ProjectsPage() {
	console.log(projects);
	return (
		<div className='projectsMainContainer'>
			<h1>Recent Projects</h1>
			<div className='allProjects'>
				{projects.map((project, i) => {
					return (
						<div key={i}>
							<h3>{project.projectName}</h3>
							<img src={project.img} alt='Project image'></img>
						</div>
					);
				})}
			</div>
		</div>
	);
}
