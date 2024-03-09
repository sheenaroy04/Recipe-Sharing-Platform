import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import { AntDesign } from '@expo/vector-icons';
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () =>{
    return(
      
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}  options={{headerShown:false,
                        tabBarIcon:() => (<AntDesign name="home" size={24} color="black" />)}} />
                <Tab.Screen name="Post" component={NewPost} options={{
                    headerShown:false,
                    tabBarIcon:() =>(
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    )
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    headerShown:false,
                    tabBarIcon:()=>(
                        <AntDesign name="user" size={24} color="black" />
                    )
                }}/>
            </Tab.Navigator>
       
    )
}




const Navigation  = () =>{
    const user = false;
    return(
        <NavigationContainer>
            {!user ? 
            <Stack.Navigator initialRouteName="Login">
                
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
            </Stack.Navigator>
                :
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="TabBar" component={TabBar} options={{headerShown:false}} />
            </Stack.Navigator>
            }
        </NavigationContainer>
    )
}


export default Navigation;