import React from 'react';
import classes from './Layout.module.css';
import AreaCountryData from '../AreaCountryData/AreaCountryData';

const Layout = () => {
	return (
		<>
			<header>
				<h1>PandeMania</h1>
			</header>
			<main>
				<p className={classes.title}>Cases and recoveries for whole country</p>
				<AreaCountryData countryName="Poland" />
			</main>
		</>
	);
};

export default Layout;
