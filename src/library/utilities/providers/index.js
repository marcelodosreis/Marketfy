import React from 'react';

import PropTypes from 'prop-types';

import ReduxProvider from './ReduxProvider/ReduxProvider';

const CombineProviders = ({ children }) => {
    return <ReduxProvider>{children}</ReduxProvider>;
};

export default CombineProviders;

CombineProviders.propTypes = {
    children: PropTypes.node.isRequired
};
