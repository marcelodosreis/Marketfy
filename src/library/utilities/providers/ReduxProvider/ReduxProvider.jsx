// React
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { Provider } from 'react-redux';

// .
import { store } from '../../../../store/index';

const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

ReduxProvider.propTypes = {
    children: PropTypes.node.isRequired
};
