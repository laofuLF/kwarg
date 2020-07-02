import {ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM, INIT_LIST_ACTION} from "./actionTypes";
import axios from "axios";
import store from "./index";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            console.log("ajax data: " + res.data);
        })
    }
}