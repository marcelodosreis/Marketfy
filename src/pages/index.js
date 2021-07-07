import withCommerce from 'library/utilities/hocs/withCommerce';
import HomeContainer from 'modules/Home/Home';
import React from 'react';

function HomePage() {
    return <HomeContainer />;
}

export default withCommerce(HomePage);
