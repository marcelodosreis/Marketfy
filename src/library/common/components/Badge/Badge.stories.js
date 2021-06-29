import React from 'react';

import Badge from './Badge';

import { GrLocation } from 'react-icons/gr';

const BadgeMock = {
    icon: <GrLocation className="h-5 w-5" />
};

const Story = (props) => <Badge {...props}>Badge Example</Badge>;

export const BadgeStory = Story.bind({});

BadgeStory.args = {
    ...BadgeMock
};

export default {
    title: 'Components/Badge',
    component: Badge
};
