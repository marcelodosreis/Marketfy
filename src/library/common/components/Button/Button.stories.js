import React from 'react';

import Button from './Button';

import { GrLocation } from 'react-icons/gr';

const ButtonMock = {};

const Story = (props) => <Button {...props}>Button Example</Button>;

const StoryWithIcon = (props) => (
    <Button {...props} icon={<GrLocation className="h-5 w-5" />}>
        Button Example
    </Button>
);

export const ButtonStory = Story.bind({});

export const ButtonStoryWithIcon = StoryWithIcon.bind({});

ButtonStory.args = {
    Button: ButtonMock
};

export default {
    title: 'Components/Button',
    component: Button
};
