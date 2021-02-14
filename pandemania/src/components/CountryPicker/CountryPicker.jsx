/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import allCountries from '../../api/FetchAllCountries';
import CountryIcon from '../CountryIcon/CountryIcon';
import CountryContext from '../context/CountryContext';
import './CountryPicker.css';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

const CountryPicker = () => {
	const [countries, setCountries] = useState([]);
	const [pickedCountry, setPickedCountry] = useState();

	const fetchData = async () => {
		const response = await allCountries();
		const fetchedCountries = response.map((c) => c);
		const sortedCountries = fetchedCountries.sort((a, b) => a.country.localeCompare(b.country));
		setCountries(sortedCountries);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<CountryContext.Provider value={pickedCountry}>
			<ThemeProvider theme={darkTheme}>
				<Autocomplete
					id="highlights-demo"
					theme={darkTheme}
					style={{ width: 300 }}
					options={countries}
					getOptionLabel={(option) => option.country}
					onChange={(_event, value) => setPickedCountry(value)}
					renderInput={(params) => (
						<TextField {...params} label="Countries" variant="outlined" margin="normal" />
					)}
					renderOption={(option, { inputValue }) => {
						const matches = match(option.country, inputValue);
						const parts = parse(option.country, matches);

						return (
							<>
								<CountryIcon code={option.ISO2} name={option.country} />
								{parts.map((part) => (
									<span key={part.text} style={{ fontWeight: part.highlight ? 700 : 400 }}>
										{part.text}
									</span>
								))}
							</>
						);
					}}
				/>
			</ThemeProvider>
		</CountryContext.Provider>
	);
};

export default CountryPicker;
