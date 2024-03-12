import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import { AntDesign , Entypo ,FontAwesome , Ionicons} from '@expo/vector-icons';

import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";
import { Text, View } from "react-native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () =>{
    return(
      
            <Tab.Navigator  screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#1c2b49',
                   
                },
            
            }}>
                <Tab.Screen name="Home" component={Home}  options={{headerShown:false,
                        tabBarIcon:({focused}) => (
                            focused?
                            <Entypo name="home" size={30} color="#cf4d0e"  />:
                        <AntDesign name="home" size={30} color="white" />
                        
                        )}} />
                <Tab.Screen name="Post" component={NewPost} options={{
                    headerShown:false,
                    tabBarIcon:({focused}) => (
                        focused?
                        <AntDesign name="pluscircle" size={30} color="#cf4d0e" />:
                        <AntDesign name="pluscircleo" size={30} color="white" />
                        
                    )
                }}/>
                <Tab.Screen name="Notification" component={NewPost} options={{
                    headerShown:false,
                    tabBarIcon:({focused}) => (
                        focused?
                        <Ionicons name="notifications-sharp" size={30} color="#cf4d0e" />:
                        <Ionicons name="notifications-outline" size={30} color="white" />
                        
                    )
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    headerShown:false,
                    tabBarIcon:({focused})=>(
                        focused?
                        <FontAwesome name="user-circle-o" size={30} color="#cf4d0e" />:
                        <FontAwesome name="user-circle" size={30} color="white" />
                    )
                }}/>
            </Tab.Navigator>
       
    )
}




const Navigation  = () =>{
    const user = true;
    return(
        <NavigationContainer>
            {!user ? 
            <Stack.Navigator initialRouteName="Login" >
                
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
            </Stack.Navigator>
                :
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="TabBar" component={TabBar}  />
            </Stack.Navigator>
            }
        </NavigationContainer>
    )
}


export default Navigation;