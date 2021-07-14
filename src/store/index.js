// Redux
import createSagaMiddleware from 'redux-saga';

// Store
import createStore from './createStore';

// Redux Modules
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export { store };
