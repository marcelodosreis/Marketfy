// Core
import React from 'react';

// Components
import Badge from './Badge';

// Icons
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
