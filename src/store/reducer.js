import {ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";

const defaultState = {
    inputValue: "",
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } else if (action.type === ADD_ITEM) {
        console.log("adding item");
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState;
    } else if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}