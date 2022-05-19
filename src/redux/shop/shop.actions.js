import {shopActionTypes} from "./shop.types";

export const updateCollections = (collections) => ({
    type: shopActionTypes.COLLECTIONS_UPDATE,
    payloads: collections
})
