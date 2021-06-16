import { atom } from "recoil";

export const productDataState = atom({
    key:"productDataState",
    default: {}
})

export const userProductDataState = atom({
    key:"userProductDataState",
    default: []
})

export const loginMailState = atom({
    key:"loginMailState",
    default: ""
})