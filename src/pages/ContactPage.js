import { Box, Button, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade } from "react-reveal";

export default function ContactPage() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Fade left duration={1000}>
				<Typography variant='h2' fontSize='5em' sx={{ mt: 4 }}>
					Let's Connect
				</Typography>
			</Fade>
			<Fade bottom delay={1200}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						borderRadius: "12px",
						mt: 5,
						padding: 1,
						width: "100%",
					}}>
					<Box
						sx={{
							padding: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Button
							sx={{ fontSize: "80px" }}
							href='mailto:aiden.mayoros@gmail.com'>
							<EmailIcon color='primary' sx={{ fontSize: "80px" }} />
						</Button>
						<Typography>
							<Link
								sx={{ color: "white" }}
								href='mailto:aiden.mayoros@gmail.com'>
								aiden.mayoros@gmail.com
							</Link>
						</Typography>
					</Box>
					<Box
						sx={{
							padding: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Button disabled sx={{ fontSize: "80px" }}>
							<LocalPhoneIcon color='primary' sx={{ fontSize: "80px" }} />
						</Button>
						<Typography>Cell: (480)-408-9254</Typography>
					</Box>
					<Box
						sx={{
							padding: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Button
							sx={{ fontSize: "80px" }}
							href='https://github.com/aidenmayoros'>
							<GitHubIcon color='primary' sx={{ fontSize: "80px" }} />
						</Button>
						<Typography>Git hub</Typography>
					</Box>
					<Box
						sx={{
							padding: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Button
							sx={{ fontSize: "80px" }}
							href='https://www.linkedin.com/in/aiden-mayoros/'>
							<LinkedInIcon color='primary' sx={{ fontSize: "80px" }} />
						</Button>
						<Typography>LinkedIn</Typography>
					</Box>
				</Box>
			</Fade>
		</Box>
	);
}
