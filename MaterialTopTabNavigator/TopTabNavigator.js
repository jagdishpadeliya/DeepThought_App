import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Explore from "../Components/Explore";
const Tab = createMaterialTopTabNavigator();
function DashboardComponent(){
    return <View><Text>Hi, DashboardComponent</Text></View>
  }
  function SocialScoreCardComponent(){
    return <View><Text>Hi, SocialScoreCardComponent</Text></View>
  }
const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: '#0029ff',
                    height: "100%",
                },
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: '500'
                },
            }}
        >
            <Tab.Screen
                name="Explore"
                component={Explore}
            />
            <Tab.Screen
                name="Dashboard"
                component={DashboardComponent}
            />
            <Tab.Screen
                name="Social ScoreCard"
                component={SocialScoreCardComponent}
            />
        </Tab.Navigator>
    )
}

export default TopTabNavigator;