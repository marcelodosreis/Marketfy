import React from 'react';

const ProfilePage = () => <p>This is ProfilePage (Next.js!)</p>;

export async function getServerSideProps() {
    return { props: {} };
}

export default ProfilePage;
