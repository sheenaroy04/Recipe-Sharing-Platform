import {createStore , Store} from 'redux';
import reducers from './reducers';
import { jwtDecode } from 'jwt-decode';
import {decode} from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface State{
    user : null | {userId : string , userName :string};
}

interface UserToken{
    user_id : string;
    username : string;
}

interface UserData {
    userId: string;
    userName: string;
  }

const getUserFromLocalStorage =async () : Promise<{user:UserData} | undefined> =>{
    
    const token : string | null = await AsyncStorage.getItem('access_token');
    if(token){
        try {
            //const userToken : UserToken = jwtDecode<UserToken>(token);
            const decodedPayload = decode(token.split('.')[1]);
            const userData  = {
                userId : decodedPayload.user_id,
                userName : decodedPayload.username
            };
            return {
                user : userData
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            return {user}
        }
    }
    return {}
}

const store : Store<State> =  createStore(reducers,getUserFromLocalStorage());

export default store;
