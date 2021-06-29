import React from 'react';

import ImageCard from './ImageCard';

const ImageCardMock = {
    title: 'Example Storybook',
    description: 'Storybook description image card',
    imageUrl:
        'https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144',
    buttonText: 'Shop!',
    buttonOnClick: () => alert(123)
};

const Story = (props) => <ImageCard {...props} />;

export const ImageCardStory = Story.bind({});
ImageCardStory.args = {
    ...ImageCardMock
};

export default {
    title: 'Components/Image Card',
    component: ImageCard
};
