import { withSubdomain } from 'library/utilities/functions/withSubdomain/withSubdomain';
import React from 'react';

const LoginPage = () => <p>Login (Next.js!)</p>;

export const getServerSideProps = withSubdomain(() => {
    return {
        props: {}
    };
}, 'account.commercify.app:8080');

export default LoginPage;
