import { SET_USER } from "./actions";

const initialState = {
    user : null
}

const reducers = (state = initialState , action) => {
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user : action.payload,
            };
            default:
                return state;
    }
}

export default reducers;    