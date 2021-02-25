const INITIAL_STATE = {
    isOpen: false
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/TOOGLE_CART_SIDEBAR': {
            return { isOpen: action.payload };
        }
        default:
            return state;
    }
}
