import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userAuth) => {
			console.log(userAuth);
			setUser(userAuth);
		});
	});

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserProvider;
