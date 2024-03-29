import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/styles.css';

export default function NavBar() {
	const navLinkStyles = ({ isActive }) => {
		return {
			fontSize: '1.2em',
			fontWeight: '500',
			fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
			padding: '10px',
			textDecoration: 'none',
			backgroundColor: isActive ? '#1976d2' : '',
			color: isActive ? 'white' : 'black',
			borderRadius: '6px',
		};
	};

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Box
			id='navbar-container'
			sx={{
				display: 'flex',
				padding: '.5em 0',
				justifyContent: 'center',
				color: 'black',
				backgroundColor: '#ffff',
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
		</Box>
	);
}
