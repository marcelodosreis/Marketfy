import React from 'react';
import PropTypes from 'prop-types';

import Router from 'next/router';
import App from 'next/app';

import Header from '../library/common/components/Header/Header';
import CartList from '../library/common/components/CartList/CartList';

import CombineProviders from '../library/utilities/providers/index';

import 'tailwindcss/tailwind.css';

import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <CombineProviders>
            <Header />
            <CartList />
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
