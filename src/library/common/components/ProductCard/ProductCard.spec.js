import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { useRouter } from 'next/router';
import CombineProviders from 'library/utilities/providers/index';

import ProductCard, { urlPath } from 'components/ProductCard/ProductCard';

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn()
}));

const ProductCardMock = {
    onClick: () => {},
    item: {
        id: 1,
        name: 'Macbook Pro 2021',
        imageUrl:
            'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        price: 2000
    }
};

describe('Components/ProductCard', () => {
    it('Should ProductCard Works', async () => {
        const { container } = render(<ProductCard {...ProductCardMock} />);
        expect(container).toBeTruthy();
    });

    it('Should ImageCard Buttons Clicked', async () => {
        const handleClick = jest.fn();

        render(<ProductCard {...ProductCardMock} onClick={handleClick} />);

        fireEvent.click(screen.getByTestId('button_product_card'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Should urlPath Function', async () => {
        const result = urlPath('React Testing In Library', 323452);
        const expectValue = 'product/react-testing-in-library/323452';

        expect(result).toBe(expectValue);
    });

    it('Should be router for correct url', () => {
        const mockRouter = {
            push: jest.fn()
        };
        useRouter.mockReturnValue(mockRouter);

        const { getByText } = render(
            <CombineProviders>
                <ProductCard {...ProductCardMock} />
            </CombineProviders>
        );

        const link = getByText(ProductCardMock.item.name);
        fireEvent.click(link);

        expect(mockRouter.push).toHaveBeenCalledWith('product/macbook-pro-2021/1');
    });
});
