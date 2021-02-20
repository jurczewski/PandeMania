const apiUrl = 'https://api.covid19api.com/countries';

export const allCountries = async () => {
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
		return console.log(error);
	}
};

export const getCountryInfo = async (code) => {
	const countries = await allCountries();
	return countries.find((c) => c.ISO2 === code);
};
