import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Select from 'components/Select/Select';

const options = [
    { value: 'value-0', label: 'value-0' },
    { value: 'value-1', label: 'value-1' },
    { value: 'value-2', label: 'value-2' }
];
const mockSelected = 'value-0';
const SelectMock = {
    options: options,
    selected: options.find((c) => c.value === mockSelected),
    onSelect: () => {}
};

describe('Components/Select', () => {
    it('Testing Select Works', async () => {
        const { container } = render(<Select {...SelectMock} />);
        expect(container).toBeTruthy();
    });

    it('Should Select open options', async () => {
        const { getByTestId } = render(<Select {...SelectMock} />);

        const select = getByTestId('select');

        fireEvent.click(select);
        expect(select).toBeTruthy();

        const selectOptionsList = getByTestId('select-options-list');
        expect(selectOptionsList).toBeTruthy();
    });

    it('Should Select change actual value', async () => {
        const mockFunc = jest.fn();
        const SelectMock = {
            options: options,
            selected: options.find((c) => c.value === mockSelected),
            onSelect: mockFunc
        };

        const { getByTestId } = render(<Select {...SelectMock} />);

        const select = getByTestId('select');

        const expectValue = options[1]?.value;

        await fireEvent.click(select);
        expect(select).toBeTruthy();

        const selectOptionsList = getByTestId('select-options-list');
        expect(selectOptionsList).toBeTruthy();

        const selectOptionsOne = getByTestId(`select-options-${expectValue}`);
        await fireEvent.click(selectOptionsOne);

        expect(SelectMock.onSelect).toHaveBeenCalled();
    });
});
