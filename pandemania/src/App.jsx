import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import UserProvider from './context/user/UserProvider';
import config from './FirebaseConfig';

firebase.initializeApp(config);

function App() {
	console.log(firebase.auth().currentUser);
	return (
		<UserProvider>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/home">
							<Layout />
						</Route>
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
