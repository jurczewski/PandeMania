import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from './context/user/UserProvider';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import { initialize } from './api/FirebaseAPI';
import './App.css';

initialize();

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Router>
					<Navbar />
					<div className="content">
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
					</div>
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
