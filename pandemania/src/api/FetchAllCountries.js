const apiUrl = 'https://api.covid19api.com/countries';

const allCountries = async () => {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		const result = data.map((record) => ({
			country: record.Country,
			slug: record.Slug,
			ISO2: record.ISO2,
		}));
		return result;
	} catch (error) {
		return console.warn(error);
	}
};

export default allCountries;
