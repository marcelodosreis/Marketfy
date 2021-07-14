// Redux
import { all, takeLatest, select, put } from 'redux-saga/effects';

// Store
import { updateCartItems, toggleNewProductNotification } from 'store/modules/cart/action';

export function* addCartItem({ payload }) {
    const { items } = yield select((state) => state.cart);

    const isProductInCart = items[payload.id];

    const updatedCart = {
        ...items,
        [payload.id]: {
            ...payload,
            quantity: isProductInCart?.quantity ? isProductInCart.quantity + 1 : 1
        }
    };
    yield put(toggleNewProductNotification(true));
    yield put(updateCartItems(updatedCart));
}

export function* removeCartItem({ payload }) {
    const { items } = yield select((state) => state.cart);

    const productQuantity = items[payload.id].quantity;
    const cartClone = Object.assign({}, items);

    if (productQuantity <= 1) {
        delete cartClone[payload.id];
    } else {
        cartClone[payload.id].quantity === --cartClone[payload.id].quantity;
    }
    yield put(updateCartItems(cartClone));
}

export default all([
    takeLatest('@cart/ADD_CART_ITEM', addCartItem),
    takeLatest('@cart/REMOVE_CART_ITEM', removeCartItem)
]);
