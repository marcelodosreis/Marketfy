// React
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { addCartItem, removeCartItem } from 'store/modules/cart/action';

// Icons
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';

const QuantityButton = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center mt-2">
            <button
                onClick={() => dispatch(addCartItem(item))}
                className="text-gray-500 focus:outline-none focus:text-gray-600">
                <BsPlusCircle className="h-5 w-5" />
            </button>
            <span className="text-gray-700 mx-2">{item.quantity}</span>
            <button
                onClick={() => dispatch(removeCartItem(item))}
                className="text-gray-500 focus:outline-none focus:text-gray-600">
                <BsDashCircle className="h-5 w-5" />
            </button>
        </div>
    );
};

export default QuantityButton;

QuantityButton.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired
};
