import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // use set to create a immutable copy with this new value
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANG_LIST) {
        return state.set('list', action.data);
    }
    return state;
}