import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import PropTypes from 'prop-types';

export const urlPath = (title, id) =>
    `product/${title?.trim()?.toLowerCase().replace(/\s/g, '-')}/${id}`;

const ProductCard = ({ onClick, item }) => {
    const router = useRouter();

    return (
        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`
                }}
                className="flex items-end justify-end h-56 w-full bg-cover">
                <button
                    onClick={() => onClick()}
                    className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    data-testid="button_product_card">
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
            <div className="flex flex-col px-5 py-3">
                <p onClick={() => router.push(urlPath(item?.name, item?.id))}>{item?.name}</p>
                <span className="text-gray-500 mt-2">${item?.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.object
};
