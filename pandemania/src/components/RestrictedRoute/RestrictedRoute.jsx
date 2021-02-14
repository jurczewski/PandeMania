import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/user/UserContext';

const RestrictedRoute = ({ path, children }) => {
	const userContext = useContext(UserContext);

	if (userContext.fetched) {
		return userContext.user !== null ? <Route path={path}>{children}</Route> : <Redirect to="/" />;
	}
	return null;
};

RestrictedRoute.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default RestrictedRoute;
