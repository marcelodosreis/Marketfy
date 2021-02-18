import React from 'react';

import PropTypes from 'prop-types';

import GlobalStyle from '../resources/styles/globalStyle';

import App from 'next/app';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.object.isRequired
};
