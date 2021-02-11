import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import propTypes from 'prop-types';
import dataForCountry from '../../api/FetchDataForCountry';

const initialState = {
	options: {
		chart: {
			id: 'countryData',
		},
		xaxis: {
			categories: [0],
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		theme: {
			mode: 'dark',
		},
	},
	series: [
		{
			name: 'Confirmed cases',
			data: [0, 0],
		},
		{
			name: 'Recovered cases',
			data: [0, 0],
		},
	],
};

const AreaCountryData = ({ countryName }) => {
	const [chartData, setChartData] = useState(initialState);

	const fetchData = async () => {
		const response = await dataForCountry(countryName);

		const series = [
			{
				name: 'Confirmed cases',
				data: response.map((c) => c.confirmed),
			},
			{
				name: 'Recovered cases',
				data: response.map((c) => c.recovered),
			},
		];

		setChartData({
			...chartData,
			series,
			options: {
				...chartData.options,
				xaxis: {
					categories: response.map((c) => new Date(c.date).toLocaleDateString()),
				},
			},
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <Chart options={chartData.options} series={chartData.series} type="area" height={500} />;
};

AreaCountryData.propTypes = {
	countryName: propTypes.string,
};

AreaCountryData.defaultProps = {
	countryName: 'poland',
};

export default AreaCountryData;
