import { Box, Button, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade } from "react-reveal";
import styled from "@emotion/styled";

const SocialBox = styled("div")({
	padding: "16px",
	margin: "16px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	border: "3px solid #1976d1",
	borderRadius: ".5em",
});

export default function ContactPage() {
	return (
		<Box
			className='home-container'
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Fade left duration={1000}>
				<Typography variant='h2' fontSize='3em' sx={{ mt: 4 }}>
					Let's Connect
				</Typography>
			</Fade>
			<Fade bottom delay={1200}>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						justifyContent: "center",
						borderRadius: "12px",
						mt: 2,
						width: "100%",
					}}>
					<SocialBox>
						<Button
							sx={{ fontSize: "80px" }}
							href='mailto:aiden.mayoros@gmail.com'>
							<EmailIcon color='primary' sx={{ fontSize: "55px" }} />
						</Button>
						<Typography>
							<Link
								sx={{ color: "white" }}
								href='mailto:aiden.mayoros@gmail.com'>
								aiden.mayoros@gmail.com
							</Link>
						</Typography>
					</SocialBox>
					<SocialBox>
						<Button disabled sx={{ fontSize: "80px" }}>
							<LocalPhoneIcon color='primary' sx={{ fontSize: "55px" }} />
						</Button>
						<Typography>Cell: (480)-408-9254</Typography>
					</SocialBox>
					<SocialBox>
						<Button
							sx={{ fontSize: "80px" }}
							href='https://github.com/aidenmayoros'>
							<GitHubIcon color='primary' sx={{ fontSize: "55px" }} />
						</Button>
						<Typography>Git hub</Typography>
					</SocialBox>
					<SocialBox>
						<Button
							sx={{ fontSize: "80px" }}
							href='https://www.linkedin.com/in/aiden-mayoros/'>
							<LinkedInIcon color='primary' sx={{ fontSize: "55px" }} />
						</Button>
						<Typography>LinkedIn</Typography>
					</SocialBox>
				</Box>
			</Fade>
		</Box>
	);
}
