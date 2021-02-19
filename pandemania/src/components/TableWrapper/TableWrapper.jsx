import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dataForCountry from '../../api/FetchDataForCountry';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

const initialState = [
	createData('Confirmed', 0),
	createData('Deaths', 0),
	createData('Recovered', 0),
	createData('Active', 0),
];

function createData(name, number) {
	return { name, number };
}

const TableWrapper = ({ countryName }) => {
	const [rows, setRows] = useState(initialState);

	useEffect(() => {
		fetchData();
	}, [countryName]);

	const fetchData = async () => {
		const response = await dataForCountry(countryName);

		if (response.length !== 0) {
			const today = response[response.length - 1];

			setRows([
				createData('Confirmed', today.confirmed),
				createData('Deaths', today.deaths),
				createData('Recovered', today.recovered),
				createData('Active', today.active),
			]);
		}
	};

	return (
		<div style={{ marginBottom: '1rem' }}>
			<ThemeProvider theme={darkTheme}>
				<TableContainer component={Paper}>
					<Table aria-label="country statistic">
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
										{row.name}
									</TableCell>
									<TableCell align="right">{row.number}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</ThemeProvider>
		</div>
	);
};

TableWrapper.propTypes = {
	countryName: propTypes.string.isRequired,
};

export default TableWrapper;
