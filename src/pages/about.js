import React from 'react';

const AboutPage = () => <p>This is about Next.js!</p>;

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
    return { props: {} };
}

export default AboutPage;
