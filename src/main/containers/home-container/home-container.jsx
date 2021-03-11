import ImageCard from '@/library/common/components/ImageCard/ImageCard';
import ProductCard from '@/library/common/components/ProductCard/ProductCard';
import React from 'react';

// import PropTypes from 'prop-types';
export default function HomeContainer() {
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
                        {[1, 2, 3, 4].map((item) => (
                            <ProductCard key={item} />
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-gray-600 text-2xl font-medium">Section Two</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {[1, 2, 3, 4].map((item) => (
                            <ProductCard key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

HomeContainer.propTypes = {};
