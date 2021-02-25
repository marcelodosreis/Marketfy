import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';

import { store } from '../../../../main/store/index';

const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

ReduxProvider.propTypes = {
    children: PropTypes.node.isRequired
};
