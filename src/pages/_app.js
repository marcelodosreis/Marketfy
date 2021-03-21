import React from 'react';
import PropTypes from 'prop-types';

import Router from 'next/router';
import App from 'next/app';

import Header from '@/main/containers/Header/Header';
import Footer from '@/library/common/components/Footer/Footer';
import CartList from '@/main/containers/CartList/CartList';

import CombineProviders from '@/library/utilities/providers/index';

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
            <Footer />
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
