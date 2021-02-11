import React from 'react';
import classes from './Layout.module.css';
import AreaDateTimeCountryData from '../graphs/AreaDateTimeCountryData';

const Layout = () => {
	return (
		<>
			<header>
				<h1>PandeMania</h1>
			</header>
			<main>
				<p className={classes.title}>Cases and recoveries for whole country</p>
				<AreaDateTimeCountryData countryName="poland" />
			</main>
		</>
	);
};

export default Layout;
