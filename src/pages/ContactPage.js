import { Box, Button, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade } from "react-reveal";
import styled from "@emotion/styled";
import "../styles/contact.css";

const SocialBox = styled("div")({
	// padding: "16px",
	// margin: "16px",
	display: "flex",
	// flexDirection: "column",
	alignItems: "center",
	// border: "3px solid white",
	// borderRadius: ".5em",
});

const iconStyles = {
	fontSize: "32px",
	p: 1,
	":hover": { backgroundColor: "white", borderRadius: "12px" },
};

export default function ContactPage() {
	return (
		<Box
			className='home-container'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Box>
				<Fade left duration={1000}>
					<Typography variant='h2' fontSize='3em' sx={{ mt: 4 }}>
						Let's Connect
					</Typography>
				</Fade>
				<Fade bottom delay={1200}>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr",
							justifyContent: "center",
							borderRadius: "12px",
							mt: 2,
							width: "100%",
						}}>
						<SocialBox>
							<Button href='mailto:aiden.mayoros@gmail.com'>
								<EmailIcon color='primary' sx={iconStyles} />
							</Button>
							<Typography sx={{ color: "white" }}>
								aiden.mayoros@gmail.com
							</Typography>
						</SocialBox>
						<SocialBox>
							<Button disabled>
								<LocalPhoneIcon color='primary' sx={iconStyles} />
							</Button>
							<Typography>Cell: (480)-408-9254</Typography>
						</SocialBox>
						<SocialBox>
							<Button href='https://github.com/aidenmayoros'>
								<GitHubIcon color='primary' sx={iconStyles} />
							</Button>
							<Typography>Github</Typography>
						</SocialBox>
						<SocialBox>
							<Button href='https://www.linkedin.com/in/aiden-mayoros/'>
								<LinkedInIcon color='primary' sx={iconStyles} />
							</Button>
							<Typography>LinkedIn</Typography>
						</SocialBox>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
}
