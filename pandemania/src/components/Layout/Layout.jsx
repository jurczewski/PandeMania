import React from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../graphs/AreaDateTimeCountryData/AreaDateTimeCountryData';
import CountryPicker from '../CountryPicker/CountryPicker';

const Layout = () => {
	const countryCode = 'Poland';
	return (
		<>
			<header>
				<h1>PandeMania</h1>
			</header>
			<main>
				<p className="title">
					Cases and recoveries for whole country: <span className="bold">{countryCode}</span>
				</p>
				<AreaDateTimeCountryData countryName={countryCode} />
				<CountryPicker />
			</main>
		</>
	);
};

export default Layout;
