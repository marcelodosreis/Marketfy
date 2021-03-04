import ImageCard from '@/library/common/components/ImageCard/ImageCard';
import React from 'react';

// import PropTypes from 'prop-types';
export default function HomeFactory() {
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
            </div>
        </main>
    );
}

HomeFactory.propTypes = {};
