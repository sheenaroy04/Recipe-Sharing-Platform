import {createStore} from 'redux';
import reducers from './reducers';
import { jwtDecode } from 'jwt-decode';

const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('access_token');
    if(token){
        try {
            const user_token = jwtDecode(token);
            const userData = {
                userId : user_token.user_id,
                userName : user_token.username
            }
            return{
                user : userData
            }
        } catch (error) {
            console.error('Error decoding token :' , error);
            return {}
        }
    }
    return {};
}

const store = createStore(reducers , getUserFromLocalStorage());

export default store;