// Core
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Next
import { useRouter } from 'next/router';

// Library
import { LanguageConstants } from 'library/common/constants/LanguageConstants';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const isValidLang = (lang) => {
    const enableLangs = LanguageConstants;
    return enableLangs.includes(lang);
};

const LanguageProvider = ({ children }) => {
    const router = useRouter();
    const [lang, setLang] = useState(
        isValidLang(router?.query?.lang) ? router?.query?.lang : 'pt-BR'
    );
    const updateLang = (lang) => setLang(lang);

    useEffect(() => {
        const langParam = `?lang=${lang}`;

        if (!router?.query?.lang) {
            router?.replace(langParam, null, { shallow: true });
            return;
        }
    }, [router.pathname]);

    useEffect(() => {
        const langParam = `?lang=${lang}`;
        router?.replace(langParam, null, { shallow: true });
    }, [lang]);

    return (
        <LanguageContext.Provider
            value={{
                langProvider: {
                    lang,
                    updateLang: updateLang
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
