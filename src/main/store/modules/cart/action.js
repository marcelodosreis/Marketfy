export function toggleCartSidebar(status) {
    return {
        type: '@cart/TOOGLE_CART_SIDEBAR',
        payload: status
    };
}
