/* eslint-disable no-case-declarations */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import dataForCountry from '../../api/FetchDataForCountry';

const initialState = {
	series: [
		{
			data: [[new Date().getTime(), 0]],
		},
	],
	options: {
		chart: {
			id: 'area-datetime',
			zoom: {
				autoScaleYaxis: true,
			},
		},
		theme: {
			mode: 'dark',
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			size: 0,
			style: 'hollow',
		},
		xaxis: {
			type: 'datetime',
			// min: series[0].data[0][0],
			// tickAmount: 6,
		},
		tooltip: {
			x: {
				format: 'dd MMM yyyy',
			},
		},
		// fill: {
		// 	type: 'gradient',
		// 	gradient: {
		// 		shadeIntensity: 1,
		// 		opacityFrom: 0.7,
		// 		opacityTo: 0.2,
		// 		stops: [0, 100],
		// 	},
		// },
	},
	selection: 'one_year',
};

const AreaDateTimeCountryData = ({ countryName }) => {
	const [chartData, setChartData] = useState(initialState);

	const updateData = (timeline) => {
		setChartData({
			...chartData,
			selection: timeline,
		});

		const dates = chartData.series[0].data;
		const length = dates.length - 1;
		let daysToGoBack;

		switch (timeline) {
			case 'one_month':
				daysToGoBack = 31;
				ApexCharts.exec('area-datetime', 'zoomX', dates[length - daysToGoBack][0], dates[length][0]);
				break;
			case 'six_months':
				daysToGoBack = 6 * 31;
				ApexCharts.exec('area-datetime', 'zoomX', dates[length - daysToGoBack][0], dates[dates.length - 1][0]);
				break;
			case 'one_year':
				daysToGoBack = 365;
				ApexCharts.exec('area-datetime', 'zoomX', dates[length - daysToGoBack][0], dates[length][0]);
				break;
			case 'ytd':
				const firstDay = new Date(new Date().getFullYear(), 0, 1);
				ApexCharts.exec('area-datetime', 'zoomX', firstDay.getTime(), dates[length][0]);
				break;
			case 'all':
				ApexCharts.exec('area-datetime', 'zoomX', dates[0][0], dates[length][0]);
				break;
			default:
		}
	};

	const fetchData = async () => {
		const response = await dataForCountry(countryName);

		const series = [
			{
				name: 'Confirmed cases',
				data: response.map((c) => [c.date, c.confirmed]),
			},
			{
				name: 'Recovered cases',
				data: response.map((c) => [c.date, c.recovered]),
			},
		];

		setChartData({
			...chartData,
			series,
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div id="chart">
			<div className="toolbar">
				<button
					id="one_month"
					onClick={() => updateData('one_month')}
					className={chartData.selection === 'one_month' ? 'active' : ''}
				>
					1M
				</button>
				&nbsp;
				<button
					id="six_months"
					onClick={() => updateData('six_months')}
					className={chartData.selection === 'six_months' ? 'active' : ''}
				>
					6M
				</button>
				&nbsp;
				<button
					id="one_year"
					onClick={() => updateData('one_year')}
					className={chartData.selection === 'one_year' ? 'active' : ''}
				>
					1Y
				</button>
				&nbsp;
				<button
					id="ytd"
					onClick={() => updateData('ytd')}
					className={chartData.selection === 'ytd' ? 'active' : ''}
				>
					YTD
				</button>
				&nbsp;
				<button
					id="all"
					onClick={() => updateData('all')}
					className={chartData.selection === 'all' ? 'active' : ''}
				>
					ALL
				</button>
			</div>

			<div id="chart-timeline">
				<Chart options={chartData.options} series={chartData.series} type="area" height={500} />
			</div>
		</div>
	);
};

AreaDateTimeCountryData.propTypes = {
	countryName: propTypes.string,
};

AreaDateTimeCountryData.defaultProps = {
	countryName: 'poland',
};

export default AreaDateTimeCountryData;
