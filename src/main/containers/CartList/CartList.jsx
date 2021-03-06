// Core
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Store
import { toggleCartSidebar, toggleNewProductNotification } from 'store/modules/cart/action';

// Library
import { withLang } from 'library/utilities/providers/LanguageProvider/LanguageProvider';

// Components
import Button from 'components/Button/Button';

// Main
import PromoteCode from 'main/containers/CartList/PromoteCode/PromoteCode';
import CartItem from 'main/containers/CartList/CartItem/CartItem';

// Icons
import { BsArrowRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

// Locales
import locales from './_locales/locales.json';

const CartList = ({ langProvider: { lang } }) => {
    const { isOpen, items, hasNewProducts } = useSelector((state) => state.cart);
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
                <h3 className="text-2xl font-medium text-gray-700">
                    {locales[lang]['CART_TITLE']}
                </h3>
                <button
                    onClick={() => dispatch(toggleCartSidebar(!isOpen))}
                    className="text-gray-600 focus:outline-none">
                    <GrClose className="h-5 w-5" />
                </button>
            </div>
            <hr className="my-3" />
            {!Object.values(items).length && (
                <p className="text-1xl text-center font-medium text-gray-700">
                    {locales[lang]['EMPTY_CART']}
                </p>
            )}
            {items && Object.values(items).map((item) => <CartItem key={item.id} item={item} />)}

            <PromoteCode lang={lang} />
            <Button icon={<BsArrowRight className="h-5 w-5" />}>{locales[lang]['CHECKOUT']}</Button>
        </div>
    );
};

export default withLang(CartList);

CartList.propTypes = {
    langProvider: PropTypes.shape({
        lang: PropTypes.string.isRequired,
        updateLang: PropTypes.func.isRequired
    }).isRequired
};
