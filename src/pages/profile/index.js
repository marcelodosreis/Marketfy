// Core
import React from 'react';
import PropTypes from 'prop-types';

// Library
import { withUserAuth } from 'library/utilities/functions/withUserAuth';

const ProfilePage = ({ isLogged }) => {
    return <p>This is ProfilePage (Next.js!) Logged: {isLogged}</p>;
};

ProfilePage.propTypes = {
    isLogged: PropTypes.bool //.isRequired
};

export const getServerSideProps = withUserAuth(({ userIsLogged }) => {
    return {
        props: {
            isLogged: userIsLogged
        }
    };
});

export default ProfilePage;
