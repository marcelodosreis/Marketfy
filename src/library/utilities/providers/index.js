import React from 'react';

import PropTypes from 'prop-types';

import ReduxProvider from '@/library/utilities/providers/ReduxProvider/ReduxProvider';
import LanguageProvider from '@/library/utilities/providers/LanguageProvider/LanguageProvider';
import { AuthProvider } from './Auth/Auth';

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
