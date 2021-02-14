import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from './context/user/UserProvider';
import config from './FirebaseConfig';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';

firebase.initializeApp(config);

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Router>
					<Switch>
						<RestrictedRoute path="/home">
							<Layout />
						</RestrictedRoute>
						<Route path="/">
							<Login />
						</Route>
					</Switch>
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
