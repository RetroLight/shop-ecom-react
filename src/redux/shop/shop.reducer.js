import {shopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.COLLECTIONS_UPDATE:
            return {
                ...state,
                collections: action.payloads
            }
        default:
            return state
    }
}

export default shopReducer;
