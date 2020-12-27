import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Login extends Component {
//   static navigationOptions = ({ navigation }) => ({
//     drawerLabel: 'Login',
//     title: 'LoginHead'
//     // headerLeft:
//     // <View style={{ marginLeft: 10 }}>
//     //   <Button title="Back" onPress={() => navigation.goBack()} />
//     // </View>
//   });
  render() {
    return (
      <View>
        <Text>
           LOGIN VIEW
        </Text>
      </View>
    );
  }
}
// export function Login({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }