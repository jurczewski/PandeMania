import React from 'react';
import propTypes from 'prop-types';

const sizes = Object.freeze({
	20: 20,
	40: 40,
	160: 160,
	320: 320,
	640: 640,
});

const CountryIcon = ({ code, size, name }) => {
	const isCountrySet = () => {
		return code && size && name;
	};

	return isCountrySet() ? <img src={`https://flagcdn.com/w${size}/${code.toLowerCase()}.png`} alt={name} /> : null;
};

export default CountryIcon;

CountryIcon.propTypes = {
	code: propTypes.string,
	size: propTypes.oneOf([20, 40, 160, 320, 640]),
	name: propTypes.string,
};

CountryIcon.defaultProps = {
	code: 'PL',
	size: sizes[20],
	name: 'Poland',
};
