import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className='navContainer'>
			<nav>
				<Link to='/'>Home |</Link>
				<Link to='/projects'>Projects |</Link>
				<Link to='/about'>About |</Link>
				<Link to='/Contact'>Contact</Link>
			</nav>
		</div>
	);
}
