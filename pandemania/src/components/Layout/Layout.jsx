import React, { useContext, useEffect, useState } from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../ChartWrapper/ChartWrapper';
import CountryPicker from '../CountryPicker/CountryPicker';
import CountryIcon from '../CountryIcon/CountryIcon';
import FavoriteIconWrapper from '../FavoriteIcon/FavoriteIcon';
import UserContext from '../../context/user/UserContext';
import { addFavoriteCountry } from '../../api/FirebaseAPI';
import { getCountryInfo } from '../../api/FetchAllCountries';

const Layout = () => {
	const { country: userCountry, user, setUser, fetched } = useContext(UserContext);
	const [pickedCountry, setPickedCountry] = useState({
		slug: 'poland',
		country: 'Poland',
		ISO2: 'pl',
	});

	useEffect(() => {
		if (typeof userCountry !== 'undefined' && userCountry !== '') {
			getCountryInfo(userCountry).then((country) => setPickedCountry(country));
		}
	}, [userCountry]);

	const handleSetFavoriteCountry = () => {
		const id = user.uid;
		addFavoriteCountry(id, pickedCountry.ISO2);
		setUser({ user, fetched, country: pickedCountry.ISO2 });
	};

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
				<div className="picker">
					<CountryPicker setPickedCountry={(value) => setPickedCountry(value)} />
					<FavoriteIconWrapper
						onClick={handleSetFavoriteCountry}
						isSet={pickedCountry.ISO2 === userCountry}
					/>
				</div>
				<AreaDateTimeCountryData countryName={pickedCountry.slug} />
			</main>
		</>
	);
};

export default Layout;
