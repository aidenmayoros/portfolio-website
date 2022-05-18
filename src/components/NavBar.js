import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
	let navigate = useNavigate();

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
			<Button
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
			</Button>
		</Box>
	);
}
