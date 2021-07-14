// Core
import React from 'react';

// Components
import Footer from './Footer';

const FooterMock = {};

const Story = (props) => <Footer {...props} />;

export const FooterStory = Story.bind({});
FooterStory.args = {
    ...FooterMock
};

export default {
    title: 'Components/Footer',
    component: Footer
};
