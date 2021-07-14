import React from 'react';

const LoginPage = () => <p>Login (Next.js!)</p>;

export async function getServerSideProps({ res, req }) {
    const urlHost = req?.headers?.host;
    const loginUrl = 'account.commercify.app:8080';

    if (res && urlHost !== loginUrl) {
        console.log(urlHost, loginUrl);
        res.writeHead(301, {
            Location: `http://${loginUrl}/login`
        });
        res.end();
    }

    return { props: {} };
}

export default LoginPage;
