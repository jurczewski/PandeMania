/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dataForCountry from '../../../api/FetchDataForCountry';
import './AreaDateTimeCountryData.css';

const id = 'area-datetime';

const initialState = {
	series: [
		{
			data: [[new Date().getTime(), 0]],
		},
	],
	options: {
		chart: {
			id,
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
		xaxis: {
			type: 'datetime',
		},
		tooltip: {
			x: {
				format: 'dd MMM yyyy',
			},
		},
	},
	selection: 'one_year',
};

const timelineEnum = Object.freeze({
	ONE_MONTH: 'one_month',
	SIX_MONTH: 'six_months',
	ONE_YEAR: 'one_year',
	YTD: 'ytd',
	ALL: 'all',
});

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
			case timelineEnum.ONE_MONTH:
				daysToGoBack = 31;
				ApexCharts.exec(id, 'zoomX', dates[length - daysToGoBack][0], dates[length][0]);
				break;
			case timelineEnum.SIX_MONTH:
				daysToGoBack = 6 * 31;
				ApexCharts.exec(id, 'zoomX', dates[length - daysToGoBack][0], dates[dates.length - 1][0]);
				break;
			case timelineEnum.ONE_YEAR:
				daysToGoBack = 365;
				ApexCharts.exec(id, 'zoomX', dates[length - daysToGoBack][0], dates[length][0]);
				break;
			case timelineEnum.YTD:
				const firstDay = new Date(new Date().getFullYear(), 0, 1);
				ApexCharts.exec(id, 'zoomX', firstDay.getTime(), dates[length][0]);
				break;
			case timelineEnum.ALL:
				ApexCharts.exec(id, 'zoomX', dates[0][0], dates[length][0]);
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
		<>
			<ButtonGroup className="toolbar">
				<Button
					variant="contained"
					onClick={() => updateData('one_month')}
					className={chartData.selection === 'one_month' ? 'active' : ''}
				>
					1M
				</Button>
				<Button
					variant="contained"
					onClick={() => updateData('six_months')}
					className={chartData.selection === 'six_months' ? 'active' : ''}
				>
					6M
				</Button>
				<Button
					variant="contained"
					onClick={() => updateData('one_year')}
					className={chartData.selection === 'one_year' ? 'active' : ''}
				>
					1Y
				</Button>
				<Button
					variant="contained"
					onClick={() => updateData('ytd')}
					className={chartData.selection === 'ytd' ? 'active' : ''}
				>
					YTD
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => updateData('all')}
					className={chartData.selection === 'all' ? 'active' : ''}
				>
					ALL
				</Button>
			</ButtonGroup>

			<div>
				<Chart options={chartData.options} series={chartData.series} type="area" height={500} />
			</div>
		</>
	);
};

AreaDateTimeCountryData.propTypes = {
	countryName: propTypes.string,
};

AreaDateTimeCountryData.defaultProps = {
	countryName: 'poland',
};

export default AreaDateTimeCountryData;
