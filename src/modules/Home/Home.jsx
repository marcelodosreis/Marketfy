import React from 'react';

import { useDispatch } from 'react-redux';

import ImageCard from 'components/ImageCard/ImageCard';
import ProductCard from 'components/ProductCard/ProductCard';

import { addCartItem } from 'store/modules/cart/action';

// import PropTypes from 'prop-types';
export default function HomeContainer() {
    const dispatch = useDispatch();

    const CartMock = {
        1: {
            id: 1,
            name: 'Macbook Pro 2021',
            imageUrl:
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            price: 2000
        },
        2: {
            id: 2,
            name: 'iPhone 12',
            imageUrl:
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            price: 1000
        }
    };

    return (
        <main className="my-8">
            <div className="container mx-auto px-6">
                <ImageCard
                    title="Example Storybook"
                    description="Storybook description image card"
                    imageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                    buttonText="Shop!"
                    buttonOnClick={() => alert(123)}
                />
                <div className="md:flex mt-8 md:-mx-4">
                    <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                        <ImageCard
                            title="Example Storybook"
                            description="Storybook description image card"
                            imageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                            buttonText="Shop!"
                            buttonOnClick={() => alert(123)}
                        />
                    </div>
                    <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                        <ImageCard
                            title="Example Storybook"
                            description="Storybook description image card"
                            imageUrl="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144"
                            buttonText="Shop!"
                            buttonOnClick={() => alert(123)}
                        />
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-gray-600 text-2xl font-medium">Section One</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {Object.values(CartMock).map((item) => (
                            <ProductCard
                                onClick={() => dispatch(addCartItem(item))}
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-gray-600 text-2xl font-medium">Section Two</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {Object.values(CartMock).map((item) => (
                            <ProductCard
                                onClick={() => dispatch(addCartItem(item))}
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

HomeContainer.propTypes = {};
