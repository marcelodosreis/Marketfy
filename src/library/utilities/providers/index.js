// Core
import React from 'react';
import PropTypes from 'prop-types';

// Library
import ReduxProvider from 'library/utilities/providers/ReduxProvider/ReduxProvider';
import LanguageProvider from 'library/utilities/providers/LanguageProvider/LanguageProvider';
import { AuthProvider } from 'library/utilities/providers/Auth/Auth';

const CombineProviders = ({ children }) => {
    return (
        <AuthProvider>
            <ReduxProvider>
                <LanguageProvider>{children}</LanguageProvider>
            </ReduxProvider>
        </AuthProvider>
    );
};

export default CombineProviders;

CombineProviders.propTypes = {
    children: PropTypes.node.isRequired
};
