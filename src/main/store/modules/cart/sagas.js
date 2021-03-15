import { all, takeLatest, select, put } from 'redux-saga/effects';
import { successAddProductInCart } from '@/main/store/modules/cart/action';

export function* addProduct({ payload }) {
    const { cartItems } = yield select((state) => state.cart);

    const isProductInCart = cartItems[payload.id];

    yield put(
        successAddProductInCart({
            [payload.id]: {
                ...payload,
                quantity: isProductInCart?.quantity ? isProductInCart.quantity + 1 : 1
            }
        })
    );
}

export default all([takeLatest('@cart/START_ADD_PRODUCT_IN_CART', addProduct)]);
