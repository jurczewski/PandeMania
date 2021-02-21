import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';

const LogoutMenuItem = ({ onClick }) => {
	return (
		<MenuItem onClick={onClick} aria-label="Log out">
			<ListItemIcon style={{ width: '50%', color: 'white' }}>
				<SvgIcon>
					<path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
				</SvgIcon>
			</ListItemIcon>
			<Typography>Log out</Typography>
		</MenuItem>
	);
};

LogoutMenuItem.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LogoutMenuItem;
