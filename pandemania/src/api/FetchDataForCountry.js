const apiUrl = 'https://api.covid19api.com/country/';

const dataForCountry = async (countryName) => {
	try {
		const response = await fetch(`${apiUrl}${countryName}`);
		const data = await response.json();
		const result = data.map((record) => ({
			country: record.Country,
			id: record.ID,
			confirmed: record.Confirmed,
			recovered: record.Recovered,
			date: Date.parse(record.Date),
		}));
		return result;
	} catch (error) {
		return console.warn(error);
	}
};

export default dataForCountry;
