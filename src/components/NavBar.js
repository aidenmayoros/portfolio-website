import "../styles/NavBar.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

export default function NavBar() {
	let navigate = useNavigate();

	return (
		<List
			sx={{
				display: "flex",
				padding: "1em",
				justifyContent: "center",
				color: "black",
				backgroundColor: "#ffff",
			}}>
			<Box sx={{ display: "flex" }}>
				<ListItem button onClick={() => navigate("/")}>
					<ListItemText primary={"Home"} />
				</ListItem>
				<ListItem button onClick={() => navigate("/projects")}>
					<ListItemText primary={"Projects"} />
				</ListItem>
				<ListItem button onClick={() => navigate("/contact")}>
					<ListItemText primary={"Contact"} />
				</ListItem>
			</Box>
		</List>
	);
}
