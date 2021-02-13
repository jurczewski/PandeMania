const apiUrl = 'https://api.covid19api.com/country/';

const dataForCountry = async (countryName) => {
	try {
		return fetch(`${apiUrl}${countryName}`)
			.then((response) => response.json())
			.then((data) =>
				data.map((record) => ({
					id: record.ID,
					country: record.Country,
					confirmed: record.Confirmed,
					recovered: record.Recovered,
					date: Date.parse(record.Date),
				})),
			);
	} catch (error) {
		return console.warn(error);
	}
};

export default dataForCountry;
