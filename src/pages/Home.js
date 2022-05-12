import "../styles/HomePage.css";
import { Avatar } from "@mui/material";
import aidenAvatar from "../images/aiden-avatar.jpg";

export default function HomePage() {
	return (
		<div className='home-container'>
			<div className='homePage-maintext'>
				<Avatar
					alt='Aiden Mayoros'
					src={aidenAvatar}
					sx={{ width: 80, height: 80 }}
				/>
				<h1 id='homePage-greeting'>Aiden Mayoros</h1>
				<h2>
					Jr. Software Engineer and <br /> Web Developer
				</h2>
				<h3>
					Check out some of the awesome
					<br /> projects I've made!
				</h3>
			</div>
		</div>
	);
}
