import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fade } from "react-reveal";
import { Button } from "@mui/material";
import "../styles/styles.css";

export default function ProjectDetails({ project }) {
	return (
		<Box className='project-details-container'>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					paddingLeft: "25%",
					paddingRight: "25%",
					background: "black",
					textAlign: "center",
				}}>
				<Fade left duration={1000}>
					<Typography sx={{ mt: 5 }} variant='h2'>
						{project.projectName}
					</Typography>
					<img
						src={project.img}
						alt='project preview'
						style={{
							width: "450px",
							borderRadius: "12px",
							marginTop: "2em",
						}}></img>
				</Fade>
				<Fade left delay={1000}>
					<Typography
						sx={{ mt: 5, textDecoration: "underline" }}
						variant='h4'
						fontWeight={300}>
						Project challenges
					</Typography>
					<Typography sx={{ fontSize: 20, mt: 1 }}>
						{project.challenges}
					</Typography>
				</Fade>
				<Fade left delay={2000}>
					<Typography
						sx={{ mt: 5, textDecoration: "underline" }}
						variant='h4'
						fontWeight={300}>
						What I learned
					</Typography>
					<Typography sx={{ fontSize: 20 }}>
						{project.knowledgeLearned}
					</Typography>
				</Fade>
				<Fade left delay={3000}>
					<Typography
						sx={{ mt: 5, textDecoration: "underline" }}
						variant='h4'
						fontWeight={300}>
						Technologies Used
					</Typography>
					<Typography sx={{ mt: "2em", mb: 4, fontSize: 20 }}>
						{project.technologiesUsed}
					</Typography>
					<Button
						variant='contained'
						onClick={() => {
							window.location = project.appLink;
						}}>
						View Project
					</Button>
				</Fade>
			</Box>
		</Box>
	);
}
