import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import './FavoriteIcon.css';

const iconStyle = {
	fontSize: '2rem',
};

const FavoriteIconWrapper = ({ isSet, onClick }) => {
	return (
		<div className="wrapper">
			{isSet ? (
				<FavoriteIcon onClick={onClick} className="icon" style={iconStyle} />
			) : (
				<FavoriteBorderIcon onClick={onClick} className="icon" style={iconStyle} />
			)}
		</div>
	);
};

FavoriteIconWrapper.propTypes = {
	isSet: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

FavoriteIconWrapper.defaultProps = {
	isSet: false,
};

export default FavoriteIconWrapper;
