import {createStore , Store} from 'redux';
import reducers from './reducers';
import { jwtDecode } from 'jwt-decode';



interface State{
    user : null | {userId : string , userName :string};
}

interface UserToken{
    user_id : string;
    username : string;
}

const getUserFromLocalStorage = () : State =>{
    const token : string | null = localStorage.getItem('access_token');
    if(token){
        try {
            const userToken : UserToken = jwtDecode<UserToken>(token);
            const userData = {
                userId : userToken.user_id,
                userName : userToken.username
            };
            return {
                user : userData
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            return { user: null };
        }
    }
    return { user: null };
}

const store : Store<State> = createStore(reducers,getUserFromLocalStorage());

export default store;