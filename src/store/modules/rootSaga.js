// Redux
import { all } from 'redux-saga/effects';

// Sagas
import cart from './cart/sagas';

export default function* rootSaga() {
    return yield all([cart]);
}
