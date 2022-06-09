import {takeEvery, call, put} from 'redux-saga/effects';
import {shopActionTypes} from "./shop.types";
import {updateCollectionsSuccess, updateCollectionsFailure} from "./shop.actions";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(updateCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(updateCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
