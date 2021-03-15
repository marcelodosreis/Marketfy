import React from 'react';

import PropTypes from 'prop-types';

import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';

const QuantityButton = ({ quantity }) => (
    <div className="flex items-center mt-2">
        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
            <BsPlusCircle className="h-5 w-5" />
        </button>
        <span className="text-gray-700 mx-2">{quantity}</span>
        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
            <BsDashCircle className="h-5 w-5" />
        </button>
    </div>
);

export default QuantityButton;

QuantityButton.propTypes = {
    quantity: PropTypes.number.isRequired
};
