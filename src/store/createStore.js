import { createStore, applyMiddleware } from 'redux';

const store = (reducers, middleware) => {
    const enhancer = applyMiddleware(...middleware);

    return createStore(reducers, enhancer);
};

export default store;
