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
				<Fade delay={800}>
					<Box className='home-page-typography'>
						<Typography variant='h4' fontWeight='200'>
							Hello I'm Aiden Mayoros
						</Typography>
						<Typography
							variant='h5'
							fontWeight='200'
							sx={{ maxWidth: { xs: 300, sm: 400, lg: 600 }, pt: 2 }}>
							Web developer with a foundation in customer service. Proficient in
							Javascript, CSS and HTML. Enjoys tackling intellectually
							challenging tasks and crafting user-centered solutions to
							problems. Has a keen enthusiasm for continuous learning and
							staying updated on new skills and technologies to drive consistent
							improvement.
						</Typography>
						<Typography variant='h5' fontWeight='200' sx={{ mt: 5 }}>
							Check out some of the awesome
							<br /> projects I've made!
						</Typography>
					</Box>
				</Fade>
				<Fade bottom delay={1600}>
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
