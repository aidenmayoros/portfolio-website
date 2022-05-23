import projects from "../data/projects";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Fade } from "react-reveal";
import "../styles/projects.css";

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
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "5vw",
					textAlign: "center",
					padding: "1em",
					m: "1em",
				}}>
				{projects.map((project, i) => {
					return (
						<Fade left duration={1000}>
							<Box key={i}>
								<Typography variant='h5' sx={{ mb: "16px" }}>
									{project.projectName}
								</Typography>
								<img
									style={{
										width: "450px",
										height: "300px",
										borderRadius: "12px",
									}}
									src={project.img}
									alt='Project Preview'></img>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-evenly",
										flexDirection: "row",
									}}>
									<Button
										variant='outlined'
										onClick={() => navigate(project.pathLink)}
										sx={{ color: "white", mt: 2, borderColor: "white" }}>
										View Project
									</Button>
									<Button
										variant='outlined'
										onClick={() => navigate(project.pathLink)}
										sx={{ color: "white", mt: 2, borderColor: "white" }}>
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
