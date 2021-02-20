import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import * as PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import LogoutMenuItem from './LogoutMenuItem/LogoutMenuItem';
import CountryIcon from '../../CountryIcon/CountryIcon';

const UserMenu = ({ onClick, displayName, country }) => {
	const [anchor, setAnchor] = useState(null);
	const menuRef = useRef();

	const openMenu = () => setAnchor(menuRef.current);

	const closeMenu = () => setAnchor(null);

	return (
		<>
			<IconButton ref={menuRef} onClick={openMenu}>
				<SvgIcon>
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
				</SvgIcon>
			</IconButton>
			<Menu
				anchorEl={anchor}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchor)}
				onClose={closeMenu}
			>
				<MenuItem style={{ backgroundColor: 'transparent', cursor: 'default' }} disableRipple>
					<span>
						<b>Username: </b>
						{displayName}
					</span>
				</MenuItem>
				<MenuItem style={{ backgroundColor: 'transparent', cursor: 'default' }} disableRipple>
					<b style={{ width: '55%' }}>Country: </b>
					{country ? <CountryIcon code={country} size={24} /> : 'No country set'}
				</MenuItem>
				<Divider style={{ backgroundColor: 'grey', marginTop: '1vh', marginBottom: '1vh' }} />
				<LogoutMenuItem onClick={onClick} />
			</Menu>
		</>
	);
};

UserMenu.propTypes = {
	onClick: PropTypes.func.isRequired,
	displayName: PropTypes.string.isRequired,
	country: PropTypes.string,
};

UserMenu.defaultProps = {
	country: undefined,
};

export default UserMenu;
