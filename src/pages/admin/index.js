import React from 'react';

const AdminPage = () => <p>This is AdminPage (Next.js!)</p>;

export async function getServerSideProps() {
    return { props: {} };
}

export default AdminPage;
