import withCommerce from 'library/utilities/hocs/withCommerce';
import ProductContainer from 'modules/Product/Product';
import React from 'react';

function Product() {
    return <ProductContainer />;
}

export default withCommerce(Product);
