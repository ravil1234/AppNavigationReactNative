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
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
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
