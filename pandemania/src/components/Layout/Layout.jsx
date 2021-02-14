import React, { useState } from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../ChartWrapper/ChartWrapper';
import CountryPicker from '../CountryPicker/CountryPicker';
import CountryIcon from '../CountryIcon/CountryIcon';

const Layout = () => {
	const [pickedCountry, setPickedCountry] = useState({
		slug: 'poland',
		country: 'Poland',
	});

	return (
		<>
			<header>
				<h1>PandeMania 🦠</h1>
			</header>
			<main>
				<p className="title">
					Cases and recoveries for whole country:
					{pickedCountry && <span className="bold"> {pickedCountry.country}</span>}
					<CountryIcon code={pickedCountry.ISO2} size={24} name={pickedCountry.country} />
				</p>
				<CountryPicker setPickedCountry={(value) => setPickedCountry(value)} />
				<AreaDateTimeCountryData countryName={pickedCountry.slug} />
			</main>
		</>
	);
};

export default Layout;
