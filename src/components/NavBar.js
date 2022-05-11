import "../styles/NavBar.css";
import { useNavigate } from "react-router";

export default function NavBar() {
	return (
		<div className='navContainer'>
			<a href=''>Home</a>
			<p>|</p>
			<a href=''>About</a>
			<p>|</p>
			<a href=''>Projects</a>
			<p>|</p>
			<a href=''>Contact</a>
		</div>
	);
}
