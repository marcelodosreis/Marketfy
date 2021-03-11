import ImageCard from '@/library/common/components/ImageCard/ImageCard';
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
                            <div
                                key={item}
                                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover">
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-gray-600 text-2xl font-medium">Section Two</h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="flex items-end justify-end h-56 w-full bg-cover">
                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">Chanel</h3>
                                    <span className="text-gray-500 mt-2">$12</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

HomeContainer.propTypes = {};
