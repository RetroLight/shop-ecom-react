import {shopActionTypes} from "./shop.types";

export const updateCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const updateCollectionsSuccess = (collections) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payloads: collections
})

export const updateCollectionsFailure = (errMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payloads: errMessage
})
