import { SET_USER } from "./actions";


interface Action {
    type : string,
    payload :any
}

interface State{
    user : null | { userId : string ; userName : string};
}

const initialState : State = {
    user : null
}

const reducers = (state:State = initialState , action : Action) : State =>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.payload
            };
        default:
            return state;
    }
}

export default reducers;