import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import Container from '@material-ui/core/Container';
import './Login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const history = useHistory();

	const uiConfig = {
		signInFlow: 'redirect',
		signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
		callbacks: {
			signInSuccessWithAuthResult: () => {
				history.push('/');
			},
		},
	};

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
