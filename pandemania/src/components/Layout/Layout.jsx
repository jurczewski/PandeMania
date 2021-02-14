import React from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../graphs/AreaDateTimeCountryData/AreaDateTimeCountryData';
import CountryPicker from '../CountryPicker/CountryPicker';
import CountryContext from '../context/CountryContext';

const Layout = () => {
	return (
		<>
			<header>
				<h1>PandeMania</h1>
			</header>
			<main>
				<CountryContext.Consumer>
					{(value) => (
						<>
							<p className="title">
								Cases and recoveries for whole country:{' '}
								<span className="bold">{value.countryCode}</span>
							</p>
							<CountryPicker />
							<AreaDateTimeCountryData countryName={value.slug} />
						</>
					)}
				</CountryContext.Consumer>
			</main>
		</>
	);
};

export default Layout;
