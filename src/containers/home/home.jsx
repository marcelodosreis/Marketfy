import React from 'react';

const HomeContainer = () => {
    return (
        <>
            <div className="bg-white">
                <main className="my-8">
                    <div className="container mx-auto px-6">
                        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center">
                            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                <div className="px-10 max-w-xl">
                                    <h2 className="text-2xl text-white font-semibold">
                                        Sport Shoes
                                    </h2>
                                    <p className="mt-2 text-gray-400">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Tempore facere provident molestias ipsam sint voluptatum
                                        pariatur.
                                    </p>
                                    <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <span>Shop Now</span>
                                        <svg
                                            className="h-5 w-5 mx-2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex mt-8 md:-mx-4">
                            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                    <div className="px-10 max-w-xl">
                                        <h2 className="text-2xl text-white font-semibold">
                                            Back Pack
                                        </h2>
                                        <p className="mt-2 text-gray-400">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Tempore facere provident molestias ipsam sint
                                            voluptatum pariatur.
                                        </p>
                                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                            <span>Shop Now</span>
                                            <svg
                                                className="h-5 w-5 mx-2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                                    <div className="px-10 max-w-xl">
                                        <h2 className="text-2xl text-white font-semibold">Games</h2>
                                        <p className="mt-2 text-gray-400">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Tempore facere provident molestias ipsam sint
                                            voluptatum pariatur.
                                        </p>
                                        <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                            <span>Shop Now</span>
                                            <svg
                                                className="h-5 w-5 mx-2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                        <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                        <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                        <h3 className="text-gray-700 uppercase">woman mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                        <h3 className="text-gray-700 uppercase">Man Mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                    <div
                                        className="flex items-end justify-end h-56 w-full bg-cover"
                                        st>
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
                                        <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                                        <h3 className="text-gray-700 uppercase">woman mix</h3>
                                        <span className="text-gray-500 mt-2">$12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default HomeContainer;
