import React from 'react';
import { render } from '@testing-library/react';

import Button from 'components/Button/Button';
import { GrLocation } from 'react-icons/gr';

describe('Components/Button', () => {
    it('Testing Button Works', async () => {
        const { container } = render(
            <Button icon={<GrLocation className="ml-14 h-5 w-5" />}>Button</Button>
        );

        expect(container).toBeTruthy();
    });
});
