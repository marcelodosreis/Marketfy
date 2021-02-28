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
