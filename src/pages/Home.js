// import { useNavigate } from "react-router";
import "../styles/HomePage.css";
import backgroundImage from "../images/macbook1.jpg";
import NavBar from "../components/NavBar";

export default function HomePage() {
	return (
		<div className='home-container'>
			<div className='homePage-maintext'>
				<h1 id='homePage-greeting'>Aiden Mayoros</h1>
				<h2>Jr. Software Engineer</h2>
			</div>
		</div>
	);
}
