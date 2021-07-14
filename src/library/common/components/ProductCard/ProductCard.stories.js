// Core
import React from 'react';

// Components
import ProductCard from './ProductCard';

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

const Story = (props) => <ProductCard {...props}>ProductCard Example</ProductCard>;

export const ProductCardStory = Story.bind({});

ProductCardStory.args = {
    ...ProductCardMock
};

export default {
    title: 'Components/Product Card',
    component: ProductCard
};
