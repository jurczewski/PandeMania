import React from 'react';

export const initialState = {
	user: null,
	fetched: false,
	country: '',

	setUser: () => {},
};

const UserContext = React.createContext(initialState);

export default UserContext;
