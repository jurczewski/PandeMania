import React, { useContext, useEffect, useState } from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../ChartWrapper/ChartWrapper';
import CountryPicker from '../CountryPicker/CountryPicker';
import CountryIcon from '../CountryIcon/CountryIcon';
import FavoriteIconWrapper from '../FavoriteIcon/FavoriteIcon';
import UserContext from '../../context/user/UserContext';
import { addFavoriteCountry } from '../../api/FavoriteCountryCRUD';
import { getCountryInfo } from '../../api/FetchAllCountries';

const Layout = () => {
	const userContext = useContext(UserContext);
	const [pickedCountry, setPickedCountry] = useState({
		slug: 'poland',
		country: 'Poland',
		ISO2: 'pl',
	});
	const [favoriteCountry, setFavoriteCountry] = useState('');
	const [isFavoriteSet, setIsFavoriteSet] = useState(false);

	useEffect(() => {
		if (typeof userContext.country !== 'undefined' && userContext.country !== '') {
			setFavoriteCountry(userContext.country);
			getCountryInfo(userContext.country).then((country) => setPickedCountry(country));
		}
	}, [userContext]);

	const handleSetIsFavoriteSet = () => {
		if (pickedCountry.ISO2 === favoriteCountry) {
			setIsFavoriteSet(true);
		} else {
			setIsFavoriteSet(false);
		}
	};

	const handleSetFavoriteCountry = () => {
		const id = userContext.user.uid;
		addFavoriteCountry(id, pickedCountry.ISO2);
		setFavoriteCountry(pickedCountry.ISO2);
		handleSetIsFavoriteSet();
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
					<FavoriteIconWrapper onClick={handleSetFavoriteCountry} isSet={isFavoriteSet} />
				</div>
				<AreaDateTimeCountryData countryName={pickedCountry.slug} />
			</main>
		</>
	);
};

export default Layout;
