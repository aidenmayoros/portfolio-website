import "../styles/HomePage.css";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Fade } from "react-reveal";

export default function HomePage() {
	return (
		<Box className='home-container'>
			<Box mt={15} ml={10}>
				<Avatar
					alt='Aiden Mayoros'
					src='/images/aiden-avatar.jpg'
					sx={{ width: 100, height: 100, mb: 3 }}
				/>
				<Fade left duration={1000}>
					<Typography variant='h2' fontSize='5em'>
						Aiden Mayoros
					</Typography>
				</Fade>
				<Fade left duration={1000} delay={1200}>
					<Typography variant='h2' fontSize='2em'>
						Jr. Software Engineer and <br /> Web Developer
					</Typography>
				</Fade>
				<Fade bottom duration={1000} delay={2500}>
					<Typography
						variant='h4'
						fontWeight='300'
						sx={{ fontSize: "1.5em", mt: 5 }}>
						Check out some of the awesome
						<br /> projects I've made!
					</Typography>
				</Fade>
			</Box>
		</Box>
	);
}
