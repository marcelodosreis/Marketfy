import PropTypes from 'prop-types';
import React from 'react';

const ProfilePage = ({ isLogged }) => {
    console.log('[DEBUG]', isLogged);
    return <p>This is ProfilePage (Next.js!)</p>;
};

ProfilePage.propTypes = {
    isLogged: PropTypes.bool.isRequired
};

export async function getServerSideProps({ req, res }) {
    const isLogged = !!req.cookies[process.env.NEXT_PUBLIC_AUTH_KEY];

    if (!isLogged) {
        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();
    }

    return {
        props: {
            isLogged
        }
    };
}

export default ProfilePage;
