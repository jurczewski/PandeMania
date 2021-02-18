import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import Container from '@material-ui/core/Container';
import './Login.css';

const uiConfig = {
	signInFlow: 'redirect',
	signInSuccessUrl: '/',
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

const Login = () => {
	return (
		<Container maxWidth="sm" className="container">
			<div className="paper">
				<header>
					<h1>Choose sign-in option:</h1>
				</header>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		</Container>
	);
};

export default Login;
