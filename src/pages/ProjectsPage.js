import projects from '../data/projects';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Fade } from 'react-reveal';
import '../styles/styles.css';

export default function ProjectsPage() {
	let navigate = useNavigate();

	return (
		<Box
			sx={{
				backgroundColor: '#121212',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Box className='projects-page-container'>
				{projects.map((project, i) => {
					return (
						<Fade duration={2000}>
							<Box key={i}>
								<Typography variant='h5' sx={{ mb: '16px' }}>
									{project.projectName}
								</Typography>
								<img
									className='project-page-images'
									src={project.img}
									alt='Project Preview'></img>
								<Box
									className='project-buttons-container'
									sx={{
										display: 'flex',
										mt: 2,
									}}>
									<Button
										sx={{ mt: 1 }}
										className='project-button'
										variant='contained'
										onClick={() => {
											window.location = project.appLink;
										}}>
										View Project
									</Button>
									<Button
										sx={{ mt: 1 }}
										className='project-button'
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
