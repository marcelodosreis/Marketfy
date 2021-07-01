import React from 'react';
import { render } from '@testing-library/react';

import Footer from 'components/Footer/Footer';

describe('Components/Footer', () => {
    it('Should Footer Works', async () => {
        const { container } = render(<Footer>Footer</Footer>);

        expect(container).toBeTruthy();
    });
});
