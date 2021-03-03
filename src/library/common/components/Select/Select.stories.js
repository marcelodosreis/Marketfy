import React, { useState } from 'react';

import Select from './Select';

import brasilLogo from '../../../../../public/images/svg/brIcon.svg';
import usaLogo from '../../../../../public/images/svg/enIcon.svg';
import spanishLogo from '../../../../../public/images/svg/esIcon.svg';

const selectMock = [
    { label: 'Português', value: 'pt-BR', icon: brasilLogo },
    { label: 'English', value: 'en-US', icon: usaLogo },
    { label: 'Español', value: 'es-ES', icon: spanishLogo }
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
