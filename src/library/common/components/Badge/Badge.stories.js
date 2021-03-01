import React from 'react';

import Badge from './Badge';

import { GrLocation } from 'react-icons/gr';

const BadgeMock = {};

const Story = (props) => (
    <Badge {...props} icon={<GrLocation className="h-5 w-5" />}>
        Badge Example
    </Badge>
);

// Here we export a variant of the default template passing props
export const BadgeStory = Story.bind({});
BadgeStory.args = {
    Badge: BadgeMock
};

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        showImage: { control: 'boolean' }
    }
};
