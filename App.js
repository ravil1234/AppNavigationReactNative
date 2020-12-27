import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Button } from 'react-native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login  from "./screens/Login";
import SetupSignUp  from "./screens/SetupSignUp";
import SignUp from "./screens/SignUp";
import MainStack from "./screens/MainStack";
import { DrawerContent } from './screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function HomeScreen({ navigation })
 {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Login")}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("SignUp")}>
<Text style={styles.buttonText}>SignUp</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("MainStack")}>
<Text style={styles.buttonText}>MainStack</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("SetupSignUp")}>
<Text style={styles.buttonText}>SetupSignUp</Text>
</TouchableOpacity>
    </View>
  );
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Stack.Navigator  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Login" component={Login} options={{title:"Login Page",headerLeft:null}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{title:"SignUp Page",headerLeft:null}} />
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="SetupSignUp" component={SetupSignUp} />
    </Stack.Navigator>
  );
}
function MyDrawer()
{
  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
  </Drawer.Navigator>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
      <MyDrawer/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      padding: 20,
  },
  buttonContainer:{
      backgroundColor:'#2980b9',
      paddingVertical: 15,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop:25,
      width:'90%'
  },
  buttonText:{
      textAlign: 'center',
      color:'#FFF',
      fontWeight: '700'
  },
  text: {
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center'
  }    
});
