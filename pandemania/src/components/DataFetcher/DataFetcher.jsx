/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';

// rename to one query one component ex. FetchDataForCounty

// Pobranie danych z API i zapisanie do stanu:
// Wszystkie dane dla kraju
// Ostatni miesiąc
// Podsumowanie per kraj

const apiUrl = 'https://api.covid19api.com/country/';

const dataForCounty = (props) => {
	const info = fetch(`${apiUrl}${props.countryName}`)
		.then((response) => response.json())
		.then((data) => {
      // console.log(data);
      const result = data.map(record => ({ country: record.Country, id: record.ID, confirmed: record.Confirmed, recovered: record.Recovered}));
      console.log(result);
			return result;
		})
		.catch((error) => console.warn(error));

	return (
		<div>
			<p>{props.countryName}</p>
			{/* <p>{info[0].Confirmed}</p> */}
		</div>
	);
};

export default dataForCounty;
