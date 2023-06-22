import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Fade } from 'react-reveal';
import { Button } from '@mui/material';
import '../styles/styles.css';

export default function ProjectDetails({ project }) {
	return (
		<Box className='project-details-container'>
			<Box className='project-details'>
				<Fade left duration={1000}>
					<Typography sx={{ mt: 3, mb: 2 }} variant='h2' id='project-details-h2'>
						{project.projectName}
					</Typography>
					<img className='project-page-images' src={project.img} alt='project preview'></img>
					<Button
						sx={{ mt: 2 }}
						variant='contained'
						onClick={() => {
							window.location = project.appLink;
						}}>
						View Project
					</Button>
				</Fade>
				<Fade left delay={1000}>
					<Typography
						sx={{ mt: 5, mb: 1, textDecoration: 'underline' }}
						variant='h4'
						fontWeight={300}>
						Project challenges
					</Typography>
					<Typography sx={{ fontSize: 20, mt: 1 }}>{project.challenges}</Typography>
				</Fade>
				<Fade left delay={2000}>
					<Typography
						sx={{ mt: 5, mb: 1, textDecoration: 'underline' }}
						variant='h4'
						fontWeight={300}>
						What I learned
					</Typography>
					<Typography sx={{ fontSize: 20 }}>{project.knowledgeLearned}</Typography>
					<Typography
						sx={{ mt: 5, mb: 1, textDecoration: 'underline' }}
						variant='h4'
						fontWeight={300}>
						Technologies Used
					</Typography>
					<Typography sx={{ mb: 4, fontSize: 20 }}>{project.technologiesUsed}</Typography>
				</Fade>
			</Box>
		</Box>
	);
}
