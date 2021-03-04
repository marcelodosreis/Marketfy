import React from 'react';

import Footer from './Footer';

const FooterMock = {};

const Story = (props) => <Footer {...props} />;

export const FooterStory = Story.bind({});
FooterStory.args = {
    Footer: FooterMock
};

export default {
    title: 'Components/Footer',
    component: Footer
};