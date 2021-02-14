/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

const RestrictedRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props => authed !== null
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} /> )}
        />
    )
};

RestrictedRoute.propTypes = {
    component: PropTypes.any.isRequired,
    authed: PropTypes.any.isRequired,
    rest: PropTypes.any,
    location: PropTypes.any,
};

RestrictedRoute.defaultProps = {
    rest: {},
    location: '',
}

export default RestrictedRoute;
