// Core
import React, { useState } from 'react';

// Component
import Select from './Select';

const selectMock = [
    { label: 'Português', value: 'pt-BR' },
    { label: 'English', value: 'en-US' },
    { label: 'Español', value: 'es-ES' }
];

const Story = () => {
    const [lang, toggleLang] = useState('pt-BR');

    return (
        <Select
            options={selectMock}
            selected={selectMock.find((c) => c.value === lang)}
            onSelect={(value) => toggleLang(value)}
        />
    );
};

export const SelectStory = Story.bind({});
SelectStory.args = {
    Select: selectMock
};

export default {
    title: 'Components/Select',
    component: Select
};
