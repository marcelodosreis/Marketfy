// Core
import React from 'react';

// Components
import Button from './Button';

// Icons
import { GrLocation } from 'react-icons/gr';

const ButtonMock = {
    icon: <GrLocation className="h-5 w-5" />
};

const Story = (props) => <Button {...props}>Button Example</Button>;

const StoryWithIcon = (props) => <Button {...props}>Button Example</Button>;

export const ButtonStory = Story.bind({});

export const ButtonStoryWithIcon = StoryWithIcon.bind({});

ButtonStory.args = {
    ...ButtonMock
};

export default {
    title: 'Components/Button',
    component: Button
};
