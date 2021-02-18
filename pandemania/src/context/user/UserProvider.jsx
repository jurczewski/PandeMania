import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

const initialState = {
	user: null,
	fetched: false,
};
const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialState);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userAuth) => {
			setUser({
				user: userAuth,
				fetched: true,
			});
		});
	}, []);

	return <UserContext.Provider value={{ ...user, setUser }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserProvider;
