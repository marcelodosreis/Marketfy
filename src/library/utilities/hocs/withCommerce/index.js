import Footer from 'library/common/components/Footer/Footer';
import CartList from 'main/containers/CartList/CartList';
import Header from 'main/containers/Header/Header';
import React from 'react';

// eslint-disable-next-line react/display-name
const withCommerce = (Component) => (props) => {
    return (
        <>
            <Header />
            <CartList />
            <Component {...props} />
            <Footer />
        </>
    );
};

export default withCommerce;
