// Core
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

// Components
import ImageCard from 'components/ImageCard/ImageCard';

describe('Components/ImageCard', () => {
    it('Should ImageCard Works', async () => {
        const { container } = render(
            <ImageCard
                title="Example Storybook"
                description="Storybook description image card"
                imageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                buttonText="Shop!"
                buttonOnClick={() => alert(123)}
            />
        );

        expect(container).toBeTruthy();
    });

    it('Should ImageCard Buttons Clicked', async () => {
        const handleClick = jest.fn();

        render(
            <ImageCard
                title="Example Storybook"
                description="Storybook description image card"
                imageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                buttonText="Shop!"
                buttonOnClick={handleClick}
            />
        );

        fireEvent.click(screen.getByTestId('button_image_card'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
