import projects from "../data/projects";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ProjectsPage() {
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
						<Box key={i}>
							<Typography variant='h5' sx={{ mb: "16px" }}>
								{project.projectName}
							</Typography>
							<img
								style={{
									width: "350px",
									height: "250px",
									borderRadius: "12px",
								}}
								src={project.img}
								alt='Project image'></img>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
