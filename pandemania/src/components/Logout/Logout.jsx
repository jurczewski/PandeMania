import React, { useContext, useEffect } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

const Logout = () => {
	const context = useContext(UserContext);

	useEffect(() => {
		if (context.fetched) {
			firebase
				.auth()
				.signOut()
				.then(() =>
					context.setUser({
						user: null,
						fetched: false,
					}),
				);
		}
	});

	return <Redirect to="/" />;
};

export default Logout;
