import {ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";

export const getInputValueChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getAddItem = () => ({
    type: ADD_ITEM
})

export const getDeleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})