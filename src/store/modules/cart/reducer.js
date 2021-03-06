const INITIAL_STATE = {
    isOpen: false,
    hasNewProducts: true,
    items: {
        1: {
            id: 1,
            name: 'Macbook Pro 2021',
            imageUrl:
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            price: 2000,
            quantity: 1
        }
    }
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/TOOGLE_CART_SIDEBAR': {
            return { ...state, isOpen: action.payload };
        }
        case '@cart/TOGGLE_NEW_PRODUCT_NOTIFICATION': {
            return { ...state, hasNewProducts: action.payload };
        }
        case '@cart/ADD_CART_ITEM': {
            return { ...state };
        }
        case '@cart/REMOVE_CART_ITEM': {
            return { ...state };
        }
        case '@cart/UPDATE_CART_ITEMS': {
            // return { ...state };
            return { ...state, items: action.payload };
        }

        default:
            return state;
    }
}
