import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { initialize } from './api/FirebaseAPI';
import './App.css';
import Loading from './components/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const Login = React.lazy(() => import('./components/Login/Login'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));
const Logout = React.lazy(() => import('./components/Logout/Logout'));
const RestrictedRoute = React.lazy(() => import('./components/RestrictedRoute/RestrictedRoute'));
const UserProvider = React.lazy(() => import('./context/user/UserProvider'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));

initialize();

function App() {
	return (
		<Suspense fallback={<Loading />}>
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
								<Route path="*">
									<Layout />
								</Route>
							</Switch>
						</div>
					</Router>
					<ToastContainer position="bottom-center" />
				</div>
			</UserProvider>
		</Suspense>
	);
}

export default App;
