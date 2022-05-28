import projects from "../data/projects";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Fade } from "react-reveal";
import "../styles/styles.css";

export default function ProjectsPage() {
	let navigate = useNavigate();

	return (
		<Box
			sx={{
				backgroundColor: "#121212",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Box className='projects-page-container'>
				{projects.map((project, i) => {
					return (
						<Fade left duration={1000}>
							<Box key={i}>
								<Typography variant='h5' sx={{ mb: "16px" }}>
									{project.projectName}
								</Typography>
								<img
									className='project-page-images'
									src={project.img}
									alt='Project Preview'></img>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-evenly",
										flexDirection: "row",
										mt: 2,
									}}>
									<Button
										variant='contained'
										onClick={() => {
											window.location = project.appLink;
										}}>
										View Project
									</Button>
									<Button
										variant='outlined'
										onClick={() => navigate(project.pathLink)}>
										View Details
									</Button>
								</Box>
							</Box>
						</Fade>
					);
				})}
			</Box>
		</Box>
	);
}
