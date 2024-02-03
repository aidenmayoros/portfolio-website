import '../styles/styles.css';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Fade } from 'react-reveal';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	let navigate = useNavigate();

	return (
		<Box className='home-container'>
			<Box className='home-main-content' sx={{ position: 'relative' }}>
				<Fade delay={800}>
					<Avatar
						alt='Aiden Mayoros'
						src='/images/aiden-avatar.jpg'
						sx={{ width: 100, height: 100, mb: 3 }}
					/>
				</Fade>
				<Fade delay={800}>
					<Box className='home-page-typography'>
						<Typography variant='h4' fontWeight='200'>
							Hello I'm Aiden Mayoros
						</Typography>
						<Typography
							variant='h5'
							fontWeight='200'
							sx={{ maxWidth: { sm: 400, lg: 600 }, pt: 2 }}>
							I'm a web developer with a background in customer service which
							helps me to make customer centered projects aimed at making simple
							and easy to use solutions to sometimes complex problems. I am
							currently available for full time, part time or freelance work.
						</Typography>
						<Typography variant='h5' fontWeight='200' sx={{ mt: 5 }}>
							Check out some of the projects I've made!
						</Typography>
					</Box>
				</Fade>
				<Fade delay={1600}>
					<Box className='home-page-buttons'>
						<Button variant='contained' onClick={() => navigate('/projects')}>
							View Projects
						</Button>
						<Button variant='contained' onClick={() => navigate('/contact')}>
							Contact Me
						</Button>
						<Button variant='contained'>
							<a
								href={require('../data/AidenResume.pdf')}
								download="Aiden's Resume">
								Download Resume
							</a>
						</Button>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
}
