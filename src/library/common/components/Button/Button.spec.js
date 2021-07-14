// Core
import React from 'react';
import { render } from '@testing-library/react';

// Components
import Button from 'components/Button/Button';

// Icons
import { GrLocation } from 'react-icons/gr';

describe('Components/Button', () => {
    it('Should Button Works', async () => {
        const { container } = render(
            <Button icon={<GrLocation className="ml-14 h-5 w-5" />}>Button</Button>
        );

        expect(container).toBeTruthy();
    });
});
