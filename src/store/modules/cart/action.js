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

export function addCartItem(product) {
    return {
        type: '@cart/ADD_CART_ITEM',
        payload: product
    };
}

export function removeCartItem(product) {
    return {
        type: '@cart/REMOVE_CART_ITEM',
        payload: product
    };
}

export function updateCartItems(product) {
    return {
        type: '@cart/UPDATE_CART_ITEMS',
        payload: product
    };
}
