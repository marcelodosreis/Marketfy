import { createStore, applyMiddleware } from 'redux';

export default (reducers, middleware) => {
    const enhancer = applyMiddleware(...middleware);

    return createStore(reducers, enhancer);
};
