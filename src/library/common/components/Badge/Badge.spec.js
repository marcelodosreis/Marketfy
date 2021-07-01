import React from 'react';
import { render } from '@testing-library/react';

import Badge from 'components/Badge/Badge';
import { GrLocation } from 'react-icons/gr';

describe('Components/Badge', () => {
    it('Should Button Works', () => {
        const { container } = render(
            <Badge icon={<GrLocation className="ml-14 h-5 w-5" />}>Badge</Badge>
        );
        expect(container).toBeTruthy();
    });
});
