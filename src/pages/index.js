// Core
import React from 'react';

// Modules
import HomeModule from 'modules/Home/Home';

// Library
import withCommerce from 'library/utilities/hocs/withCommerce';

function HomePage() {
    return <HomeModule />;
}

export default withCommerce(HomePage);
