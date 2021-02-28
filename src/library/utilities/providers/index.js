import React from 'react';

import PropTypes from 'prop-types';

import ReduxProvider from '@/library/utilities/providers/ReduxProvider/ReduxProvider';
import LanguageProvider from '@/library/utilities/providers/LanguageProvider/LanguageProvider';

const CombineProviders = ({ children }) => {
    return (
        <ReduxProvider>
            <LanguageProvider>{children}</LanguageProvider>
        </ReduxProvider>
    );
};

export default CombineProviders;

CombineProviders.propTypes = {
    children: PropTypes.node.isRequired
};
