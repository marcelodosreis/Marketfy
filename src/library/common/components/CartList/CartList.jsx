import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    toggleCartSidebar,
    toggleNewProductNotification
} from '../../../../main/store/modules/cart/action';

import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';

import { BsArrowRight } from 'react-icons/bs';

const CartList = () => {
    const { isOpen, cartList, hasNewProducts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen && hasNewProducts) dispatch(toggleNewProductNotification(false));
    }, [isOpen]);

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'
            } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
                <button
                    onClick={() => dispatch(toggleCartSidebar(!isOpen))}
                    className="text-gray-600 focus:outline-none">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <hr className="my-3" />
            {cartList?.map(({ id, name, imageUrl, price }) => (
                <CartItem key={id} name={name} imageUrl={imageUrl} price={price} />
            ))}
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input className="form-input w-48" type="text" placeholder="Add promocode" />
                    <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Apply</span>
                    </button>
                </form>
            </div>
            <Button icon={<BsArrowRight />}>Checkout</Button>
        </div>
    );
};

export default CartList;
