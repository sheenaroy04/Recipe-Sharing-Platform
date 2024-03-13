
export const SET_USER : string = 'SET_USER';

interface UserData {
    userId : string;
    userName : string;
}

export const setUser = (userData : UserData) =>({
    type : SET_USER,
    payload : userData
})