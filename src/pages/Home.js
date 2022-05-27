import "../styles/styles.css";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Fade } from "react-reveal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	let navigate = useNavigate();

	return (
		<Box className='home-container'>
			<Box sx={{ position: "relative", left: "150px", top: "120px" }}>
				<Fade top>
					<Avatar
						alt='Aiden Mayoros'
						src='/images/aiden-avatar.jpg'
						sx={{ width: 100, height: 100, mb: 3 }}
					/>
				</Fade>
				<Fade left delay={1000}>
					<Typography variant='h2' fontSize='5em'>
						Aiden Mayoros
					</Typography>
				</Fade>
				<Fade left delay={2000}>
					<Typography variant='h2' fontSize='2em'>
						Jr. Software Engineer and <br /> Web Developer
					</Typography>
				</Fade>
				<Fade bottom delay={3000}>
					<Typography
						variant='h4'
						fontWeight='300'
						sx={{ fontSize: "1.5em", mt: 5 }}>
						Check out some of the awesome
						<br /> projects I've made!
					</Typography>

					<Box sx={{ marginTop: "24px" }}>
						<Button variant='contained' onClick={() => navigate("/projects")}>
							View Projects
						</Button>
						<Button
							sx={{ marginLeft: "24px" }}
							variant='outlined'
							onClick={() => navigate("/contact")}>
							Contact Me
						</Button>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
}
