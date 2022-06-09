import {call, all} from 'redux-saga/effects';
import {fetchCollectionsStart} from "./shop/shop.sagas";
import {userSaga} from "./user/userSagas";
import {cartSaga} from "./cart/cartSagas";

export function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSaga), call(cartSaga)]);
};
