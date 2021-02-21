import React from 'react';
import propTypes from 'prop-types';

const sizes = Object.freeze({
	16: 16,
	24: 24,
	32: 32,
	48: 48,
	64: 64,
});

const themes = Object.freeze({
	FLAT: 'flat',
	SHINY: 'shiny',
});

const CountryIcon = ({ code, size, name, theme }) => {
	const imgStyle = {
		width: size,
		height: size,
	};
	return <img src={`https://www.countryflags.io/${code}/${theme}/24.png`} alt={name} style={imgStyle} />;
};

export default CountryIcon;

CountryIcon.propTypes = {
	code: propTypes.string,
	size: propTypes.oneOf([16, 24, 32, 48, 64]),
	name: propTypes.string,
	theme: propTypes.string,
};

CountryIcon.defaultProps = {
	code: 'PL',
	size: sizes[16],
	name: 'Poland',
	theme: themes.FLAT,
};
