import React from 'react';

import PropTypes from 'prop-types';

import App from 'next/app';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.node.isRequired,
    pageProps: PropTypes.object.isRequired
};
