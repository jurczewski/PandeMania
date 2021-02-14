import React, { useState } from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../graphs/AreaDateTimeCountryData/AreaDateTimeCountryData';
import CountryPicker from '../CountryPicker/CountryPicker';

const Layout = () => {
	const [pickedCountry, setPickedCountry] = useState({
		slug: 'poland',
		country: 'Poland',
	});

	return (
		<>
			<header>
				<h1>PandeMania</h1>
			</header>
			<main>
				<p className="title">
					Cases and recoveries for whole country:
					{pickedCountry && <span className="bold"> {pickedCountry.country}</span>}
				</p>
				<CountryPicker setPickedCountry={(value) => setPickedCountry(value)} />
				<AreaDateTimeCountryData countryName={pickedCountry.slug} />
			</main>
		</>
	);
};

export default Layout;
