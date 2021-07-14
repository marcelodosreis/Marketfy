// Core
import React from 'react';

// Library
import withCommerce from 'library/utilities/hocs/withCommerce';

const AboutPage = () => <p>This is about (Next.js!)</p>;

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
    return { props: {} };
}

export default withCommerce(AboutPage);
