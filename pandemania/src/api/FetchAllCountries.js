const apiUrl = 'https://api.covid19api.com/countries';

const allCountries = async () => {
	try {
		return fetch(apiUrl)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return [];
			})
			.then((data) =>
				data.map((record) => ({
					country: record.Country,
					slug: record.Slug,
					ISO2: record.ISO2,
				})),
			);
	} catch (error) {
		return console.warn(error);
	}
};

export default allCountries;
