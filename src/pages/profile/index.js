import { withUserAuth } from 'library/utilities/hocs/withUserAuth/withUserAuth';
import PropTypes from 'prop-types';
import React from 'react';

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
