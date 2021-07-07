import withCommerce from 'library/utilities/hocs/withCommerce';
import React from 'react';

const AboutPage = () => <p>This is about (Next.js!)</p>;

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });
    return { props: {} };
}

export default withCommerce(AboutPage);
