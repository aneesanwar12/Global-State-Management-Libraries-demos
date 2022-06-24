import { atom, selector } from "recoil";

export const itemState = atom({
    key: "itemState",
    default: []
})

export const selectedItemId = atom({
    key: "selectedItemId",
    default: null
})

export const filteredData = selector({
    key: "filteredData",
    get: ({ get }) => {
        let selectedId = get(selectedItemId);
        let itemsData = get(itemState);
        const filteredData = itemsData.filter((item, key) => key !== selectedId);
        return filteredData;
    }
});