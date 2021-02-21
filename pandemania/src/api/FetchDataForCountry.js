import apiError from './Toasts';

const apiUrl = 'https://api.covid19api.com/country/';

const dataForCountry = async (countryName) => {
	return fetch(`${apiUrl}${countryName}`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			return [];
		})
		.then((data) =>
			data.map((record) => ({
				id: record.ID,
				country: record.Country,
				confirmed: record.Confirmed,
				recovered: record.Recovered,
				deaths: record.Deaths,
				active: record.Active,
				date: Date.parse(record.Date),
			})),
		)
		.catch((error) => {
			console.warn(error);
			apiError();
			return [];
		});
};

export default dataForCountry;
