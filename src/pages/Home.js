import "../styles/HomePage.css";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function HomePage() {
	return (
		<Box className='home-container'>
			<Box mt={15} ml={10}>
				<Avatar
					alt='Aiden Mayoros'
					src='/images/aiden-avatar.jpg'
					sx={{ width: 80, height: 80 }}
				/>
				<Typography variant='h2'>Aiden Mayoros</Typography>
				<Typography variant='h2' fontSize='2em'>
					Jr. Software Engineer and <br /> Web Developer
				</Typography>
				<Typography
					variant='h4'
					fontWeight='300'
					sx={{ fontSize: "1.2em", mt: 5 }}>
					Check out some of the awesome
					<br /> projects I've made!
				</Typography>
			</Box>
		</Box>
	);
}
