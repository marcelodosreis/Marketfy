// Core
import React from 'react';

// Library
import { withSubdomain } from 'library/utilities/functions/withSubdomain';

const LoginPage = () => <p>Login (Next.js!)</p>;

export const getServerSideProps = withSubdomain(
    () => {
        return {
            props: {}
        };
    },
    'account.commercify.app:8080',
    'login'
);

export default LoginPage;
