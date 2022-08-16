import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logo from './logo.svg'
import TopTabNavigator from "./MaterialTopTabNavigator/TopTabNavigator";
const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" 
          component={TopTabNavigator}
          options={{
            header:((props)=> <View style={{height:50,display:'flex',justifyContent:'center',}}>
                                <Logo style={{marginLeft:8}}/>
                              </View>)
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;