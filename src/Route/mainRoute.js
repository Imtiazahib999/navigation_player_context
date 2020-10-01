import React, { Component } from 'react';
import Feed from './../Feed/feed';
import Detail from './detail';
import { View } from 'react-native';
// import Screen1 from './src/drawer/screen1';
// import Screen2 from './src/drawer/screen2';
// import Screen3 from './src/drawer/screen3';
import Screen4 from './../Screen4';
import Screen5 from './../screen5';
import BottomTabs from './../BottomTabs';
import RouteStackScreen from './../RootStackScreen';
// import tab1 from './src/tabs/tab1';
// import tab2 from './src/tabs/tab2';
// import tab3 from './src/tabs/tab3';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContent } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {SideMenu} from './../drawer/SideMenu'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const MaterialBotoomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

const RootStack = createStackNavigator();

export const RootStackScreen = ({navigation}) => {
    return(
    
<NavigationContainer> 
      <Drawer.Navigator drawerStyle={{backgroundColor:'transparent'}} drawerContent = {props => <SideMenu {...props} />}>
        <Drawer.Screen name = "home" component = {Feed}  />
        <Drawer.Screen name = "Detail" component = {Detail} />
        <Drawer.Screen name="showMe" component = {Screen5} />
        <Drawer.Screen name = "RouteStackScreen" component = {RouteStackScreen} />
        <Drawer.Screen name = "BottomTabs" component = {BottomTabs} />
      </Drawer.Navigator>
      {/* <RouteStackScreen/> */}
    </NavigationContainer>
);
    }

export default RootStackScreen;