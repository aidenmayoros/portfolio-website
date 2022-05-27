import { Box } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	const navLinkStyles = ({ isActive }) => {
		return {
			fontSize: "1.5rem",
			fontWeight: "500",
			fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
			marginRight: "1em",
			padding: "6px 16px",
			textDecoration: "none",
			backgroundColor: isActive ? "#1976d2" : "",
			color: isActive ? "white" : "black",
			borderRadius: "6px",
		};
	};

	return (
		<Box
			sx={{
				display: "flex",
				padding: "1em",
				justifyContent: "center",
				alignItems: "center",
				color: "black",
				backgroundColor: "#ffff",
			}}>
			<NavLink style={navLinkStyles} to='/'>
				Home
			</NavLink>
			<NavLink style={navLinkStyles} to='/projects'>
				Projects
			</NavLink>
			<NavLink style={navLinkStyles} to='/contact'>
				Contact
			</NavLink>

			{/* <Button
				variant='text'
				onClick={() => navigate("/")}
				sx={{
					color: "black",
					mr: 2,
					borderRadius: "6px",
					":hover": { backgroundColor: "black", color: "white" },
				}}>
				Home
			</Button>
			<Button
				variant='text'
				onClick={() => navigate("/projects")}
				sx={{
					color: "black",
					mr: 2,
					borderRadius: "6px",
					":hover": { backgroundColor: "black", color: "white" },
				}}>
				Projects
			</Button>
			<Button
				variant='text'
				onClick={() => navigate("/contact")}
				sx={{
					color: "black",
					borderRadius: "6px",
					":hover": { backgroundColor: "black", color: "white" },
				}}>
				Contact
			</Button> */}
		</Box>
	);
}
