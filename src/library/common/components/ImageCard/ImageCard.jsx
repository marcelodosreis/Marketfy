// Core
import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ({ title, description, imageUrl, buttonText, buttonOnClick }) => (
    <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">{title}</h2>
                <p className="mt-2 text-gray-400">{description}</p>
                {buttonText && buttonOnClick && (
                    <button
                        onClick={() => buttonOnClick()}
                        className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        data-testid="button_image_card">
                        <span>{buttonText}</span>
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
                )}
            </div>
        </div>
    </div>
);

export default ImageCard;

ImageCard.defaultProps = {
    title: 'Title!',
    description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.'
};

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonOnClick: PropTypes.func,
    imageUrl: PropTypes.string
};
