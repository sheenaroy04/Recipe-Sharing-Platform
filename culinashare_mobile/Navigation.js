import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";


const Stack = createStackNavigator();


const Navigation  = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;