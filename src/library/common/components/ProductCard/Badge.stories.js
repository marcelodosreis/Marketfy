import React from 'react';

import ProductCard from './ProductCard';

const ProductCardMock = {};

const Story = (props) => <ProductCard {...props}>ProductCard Example</ProductCard>;

export const ProductCardStory = Story.bind({});
ProductCardStory.args = {
    ProductCard: ProductCardMock
};

export default {
    title: 'Components/Product Card',
    component: ProductCard
};
