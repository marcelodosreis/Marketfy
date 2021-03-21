import React from 'react';

import PropTypes from 'prop-types';
import QuantityButton from '@/main/containers/CartList/CartItem/QuantityButton/QuantityButton';

const CartItem = ({ item }) => (
    <div className="flex justify-between mt-6">
        <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src={item.imageUrl} alt="" />
            <div className="mx-3">
                <h3 className="text-sm text-gray-600">{item.name}</h3>
                <QuantityButton item={item} />
            </div>
        </div>
        <span className="text-gray-600">{item.price * item.quantity}</span>
    </div>
);

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired
};
