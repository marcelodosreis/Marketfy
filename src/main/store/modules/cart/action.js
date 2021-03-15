export function toggleCartSidebar(status) {
    return {
        type: '@cart/TOOGLE_CART_SIDEBAR',
        payload: status
    };
}

export function toggleNewProductNotification(status) {
    return {
        type: '@cart/TOGGLE_NEW_PRODUCT_NOTIFICATION',
        payload: status
    };
}

export function startAddProductInCart(product) {
    return {
        type: '@cart/START_ADD_PRODUCT_IN_CART',
        payload: product
    };
}

export function successAddProductInCart(product) {
    return {
        type: '@cart/SUCCESS_ADD_PRODUCT_IN_CART',
        payload: product
    };
}
