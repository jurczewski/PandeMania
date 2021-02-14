import React from 'react';

const UserContext = React.createContext({
	user: null,
	fetched: false,
});

export default UserContext;
