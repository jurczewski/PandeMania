import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import { getFavoriteCountry } from '../../api/FirebaseAPI';

const initialState = {
	user: null,
	fetched: false,
	country: '',
};
const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialState);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userAuth) => {
			if (userAuth) {
				getFavoriteCountry(userAuth.uid).then((country) => {
					setUser({
						user: userAuth,
						fetched: true,
						country,
					});
				});
			}
		});
	}, []);

	return <UserContext.Provider value={{ ...user, setUser }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserProvider;
