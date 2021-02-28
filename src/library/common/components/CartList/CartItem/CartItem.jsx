import React from 'react';

import PropTypes from 'prop-types';
import QuantityButton from '@/components/CartList/CartItem/QuantityButton/QuantityButton';

const CartItem = ({ name, imageUrl, price }) => (
    <div className="flex justify-between mt-6">
        <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src={imageUrl} alt="" />
            <div className="mx-3">
                <h3 className="text-sm text-gray-600">{name}</h3>
                <QuantityButton />
            </div>
        </div>
        <span className="text-gray-600">{price}</span>
    </div>
);

export default CartItem;

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
