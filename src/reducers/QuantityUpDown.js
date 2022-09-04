import { ActionTypes } from "../actions/action-types";

const initialState = 1;

const changeTheNumber = (state= initialState, {type}) => {
    switch (type) {
        case ActionTypes.INCREMENT_QUNTITY:
            return state + 1;
        case ActionTypes.DECREMENT_QUNTITY:
            if (state <= initialState) {
                return state = 1;
            }
            else{return state - 1;}
    
        default:
            return state;
    }
}

export default changeTheNumber;