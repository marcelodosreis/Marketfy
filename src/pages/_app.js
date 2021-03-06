// Core
import React from 'react';
import PropTypes from 'prop-types';

// Next
import App from 'next/app';
import Router from 'next/router';

// Library
import CombineProviders from 'library/utilities/providers/index';

// Styles
import NProgress from 'nprogress';
import 'tailwindcss/tailwind.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <CombineProviders>
            <Component {...pageProps} />
        </CombineProviders>
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
