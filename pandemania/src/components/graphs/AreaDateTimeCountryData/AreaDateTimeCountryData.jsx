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

	useEffect(() => {
		fetchData();
	}, [countryName]);

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
			case timelineEnum.YTD: {
				const firstDay = new Date(new Date().getFullYear(), 0, 1);
				ApexCharts.exec(id, 'zoomX', firstDay.getTime(), dates[length][0]);
				break;
			}
			case timelineEnum.ALL:
				ApexCharts.exec(id, 'zoomX', dates[0][0], dates[length][0]);
				break;
			default:
		}
	};

	const fetchData = async () => {
		const response = await dataForCountry(countryName);

		let series = [];
		if (typeof response !== 'undefined') {
			series = [
				{
					name: 'Confirmed cases',
					data: response.map((c) => [c.date, c.confirmed]),
				},
				{
					name: 'Recovered cases',
					data: response.map((c) => [c.date, c.recovered]),
				},
			];
		}

		setChartData({
			...chartData,
			series,
		});
	};

	const buttons = [
		{
			value: timelineEnum.ONE_MONTH,
			label: '1M',
		},
		{
			value: timelineEnum.SIX_MONTH,
			label: '6M',
		},
		{
			value: timelineEnum.ONE_YEAR,
			label: '1Y',
		},
		{
			value: timelineEnum.YTD,
			label: 'YTD',
		},
		{
			value: timelineEnum.ALL,
			label: 'ALL',
			color: 'primary',
		},
	];

	return (
		<>
			<ButtonGroup className="toolbar">
				{buttons.map((button) => (
					<Button
						key={button.value}
						variant="contained"
						color={button.color}
						onClick={() => updateData(button.value)}
						className={chartData.selection === button.value ? 'active' : ''}
					>
						{button.label}
					</Button>
				))}
			</ButtonGroup>

			<div className="chart-wrapper">
				{chartData.series[0].data.length === 0 && <h2 className="chart-wrapper__header">No data</h2>}
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
