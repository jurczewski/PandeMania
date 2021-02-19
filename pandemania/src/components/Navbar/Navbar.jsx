import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import LoginButton from './LoginButton/LoginButton';
import UserMenu from './UserMenu/UserMenu';
import './Navbar.css';

const Navbar = () => {
	const history = useHistory();
	const userContext = useContext(UserContext);

	return (
		<AppBar style={{ backgroundColor: '#303046' }}>
			<Toolbar>
				<div className="empty" />
				<div className="navtitle" style={{ textAlign: 'center' }}>
					<Typography variant="h6" onClick={() => history.push('/')}>
						PandeMania 🦠
					</Typography>
				</div>
				<div className="actions">
					{userContext.user == null ? (
						<LoginButton onClick={() => history.push('/login')} />
					) : (
						<UserMenu onClick={() => history.push('/logout')} displayName={userContext.user.displayName} />
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
