import {createStore , Store} from 'redux';
import reducers from './reducers';
import { jwtDecode } from 'jwt-decode';
import {decode} from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface State{
    user : null | {userId : string , userName :string};
}




async function initializeUser() {
    try {
        const token = await AsyncStorage.getItem('access_token');
        if (token !== null) {
            // Assuming the token stores user information in a base64 encoded string
            const decodedToken = decode(token.split('.')[1]); // Decode your token here
            const userData = JSON.parse(decodedToken);

            // Dispatch action to set user
            store.dispatch({
                type: 'SET_USER',
                payload: {
                    userId: userData.user_id,
                    userName: userData.username,
                }
            });
        }
    } catch (error) {
        console.error('Failed to load or decode token:', error);
    }
}

const store : Store<State> =  createStore(reducers,initializeUser());


export default store;
