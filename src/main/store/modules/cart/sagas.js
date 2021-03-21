import { all, takeLatest, select, put } from 'redux-saga/effects';
import { updateCartItems, toggleNewProductNotification } from '@/main/store/modules/cart/action';

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
    console.log(updatedCart);
    yield put(toggleNewProductNotification(true));
    yield put(updateCartItems(updatedCart));
}

export default all([takeLatest('@cart/ADD_CART_ITEM', addCartItem)]);
