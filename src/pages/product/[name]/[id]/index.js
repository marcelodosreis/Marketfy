// Core
import React from 'react';

// Library
import withCommerce from 'library/utilities/hocs/withCommerce';

// Modules
import ProductModule from 'modules/Product/Product';

function Product() {
    return <ProductModule />;
}

export default withCommerce(Product);
