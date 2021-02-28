import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt-BR');
    const updateLanguage = (lang) => setLang(lang);

    const isValidLang = (lang) => {
        const enableLangs = ['pt-BR'];
        return enableLangs.includes(lang);
    };

    const router = useRouter();

    useEffect(() => {
        const langParam = `?lang=${lang}`;

        if (!router?.query?.lang) {
            router.push(langParam, undefined, { shallow: true });
            return;
        }
        if (!isValidLang(router?.query?.lang)) router.push(langParam, undefined, { shallow: true });
    }, [router.pathname]);

    return (
        <LanguageContext.Provider
            value={{
                langProvider: {
                    lang,
                    updateLanguage: updateLanguage
                }
            }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    lang: PropTypes.string,
    children: PropTypes.node.isRequired
};

LanguageProvider.defaultProps = {
    lang: 'pt-BR'
};

export const withLang = (Component) => {
    return function WrapperComponent(props) {
        return (
            <LanguageConsumer>
                {(contexts) => {
                    return <Component {...contexts} {...props} />;
                }}
            </LanguageConsumer>
        );
    };
};

export default LanguageProvider;
