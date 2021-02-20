import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import './FavoriteIcon.css';

const FavoriteIconWrapper = ({ isSet, onClick }) => {
	const iconSize = '2rem';

	return (
		<div className="wrapper">
			{isSet ? (
				<FavoriteIcon onClick={onClick} className="icon" style={{ fontSize: iconSize }} />
			) : (
				<FavoriteBorderIcon onClick={onClick} className="icon" style={{ fontSize: iconSize }} />
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
