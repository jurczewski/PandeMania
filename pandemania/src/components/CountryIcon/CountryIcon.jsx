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
	return <img src={`https://www.countryflags.io/${code}/${theme}/${size}.png`} alt={name} />;
};

export default CountryIcon;

CountryIcon.propTypes = {
	code: propTypes.string,
	size: sizes,
	name: propTypes.string,
	theme: propTypes.string,
};

CountryIcon.defaultProps = {
	code: 'PL',
	size: sizes[16],
	name: 'Poland',
	theme: themes.FLAT,
};
