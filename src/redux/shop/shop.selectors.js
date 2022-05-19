import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectOverviewArray = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectedCollection = collectionId => {
    return createSelector(
        [selectShopCollections],
        collections => collections[collectionId]
    )
}
