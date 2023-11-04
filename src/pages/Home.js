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
				<Fade top>
					<Avatar
						alt='Aiden Mayoros'
						src='/images/aiden-avatar.jpg'
						sx={{ width: 100, height: 100, mb: 3 }}
					/>
				</Fade>
				<Fade left delay={800}>
					<Typography variant='h4' fontWeight='200'>
						Aiden Mayoros
					</Typography>
				</Fade>
				<Fade left delay={1200}>
					<Typography variant='h4' fontWeight='200'>
						Full Stack Software Engineer and <br /> Web Developer
					</Typography>
				</Fade>
				<Fade bottom delay={1600}>
					<Typography variant='h5' fontWeight='200' sx={{ mt: 5 }}>
						Check out some of the awesome
						<br /> projects I've made!
					</Typography>

					<Box className='home-page-buttons'>
						<Button variant='contained' onClick={() => navigate('/projects')}>
							View Projects
						</Button>
						<Button variant='contained' onClick={() => navigate('/contact')}>
							Contact Me
						</Button>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
}
