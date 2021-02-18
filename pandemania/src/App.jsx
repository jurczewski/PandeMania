import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from './context/user/UserProvider';
import config from './FirebaseConfig';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

firebase.initializeApp(config);

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<RestrictedRoute path="/logout">
							<Logout />
						</RestrictedRoute>
						<Route path="/">
							<Layout />
						</Route>
					</Switch>
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
