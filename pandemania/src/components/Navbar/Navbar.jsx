import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import LoginButton from './LoginButton/LoginButton';
import LogoutButton from './LogoutButton/LogoutButton';

const Navbar = () => {
	const history = useHistory();
	const userContext = useContext(UserContext);

	return (
		<AppBar style={{ backgroundColor: '#303046' }}>
			<Toolbar>
				<div style={{ flexGrow: 1, textAlign: 'center' }}>
					<Typography variant="h6" onClick={() => history.push('/')}>
						PandeMania 🦠
					</Typography>
				</div>
				{userContext.user == null ? (
					<LoginButton onClick={() => history.push('/login')} />
				) : (
					<LogoutButton onClick={() => history.push('/logout')} />
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
