import CombineProviders from 'library/utilities/providers/index';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React from 'react';
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
