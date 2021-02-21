import React, { useContext, useEffect, useState } from 'react';
import './Layout.css';
import AreaDateTimeCountryData from '../ChartWrapper/ChartWrapper';
import CountryPicker from '../CountryPicker/CountryPicker';
import CountryIcon from '../CountryIcon/CountryIcon';
import FavoriteIconWrapper from '../FavoriteIcon/FavoriteIcon';
import UserContext from '../../context/user/UserContext';
import { addFavoriteCountry } from '../../api/FirebaseAPI';
import { getCountryInfo } from '../../api/FetchAllCountries';
import TableWrapper from '../TableWrapper/TableWrapper';
import { newFavouriteToast } from '../../api/Toasts';

const initialState = {
	slug: null,
	country: null,
	ISO2: null,
};

const Layout = () => {
	const { country: userCountry, user, setUser, fetched } = useContext(UserContext);
	const [pickedCountry, setPickedCountry] = useState(initialState);

	useEffect(() => {
		if (typeof userCountry !== 'undefined' && userCountry !== '') {
			getCountryInfo(userCountry).then((country) => {
				if (country) {
					setPickedCountry(country);
				} else {
					setPickedCountry(initialState);
				}
			});
		}
	}, [userCountry]);

	const handleSetFavoriteCountry = () => {
		const id = user.uid;
		addFavoriteCountry(id, pickedCountry.ISO2);
		setUser({ user, fetched, country: pickedCountry.ISO2 });
		newFavouriteToast(pickedCountry.country);
	};

	return (
		<>
			<main>
				<p className="title">
					Cases and recoveries for whole country:
					{pickedCountry.country ? (
						<span className="bold"> {pickedCountry.country}</span>
					) : (
						<span>No country set</span>
					)}
					<CountryIcon code={pickedCountry.ISO2} size={24} name={pickedCountry.country} />
				</p>
				<div className="picker">
					<CountryPicker setPickedCountry={(value) => setPickedCountry(value)} />
					{user && (
						<FavoriteIconWrapper
							onClick={handleSetFavoriteCountry}
							isSet={pickedCountry.ISO2 === userCountry}
						/>
					)}
				</div>
				<AreaDateTimeCountryData countryName={pickedCountry.slug} />
				<TableWrapper countryName={pickedCountry.slug} />
			</main>
		</>
	);
};

export default Layout;
