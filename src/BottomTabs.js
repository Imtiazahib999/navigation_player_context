import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import tab1 from './tabs/tab1';
import tab2 from './tabs/tab2';
import tab3 from './tabs/tab3';
import Icon from 'react-native-vector-icons/AntDesign';
import Class from 'react-native-vector-icons/MaterialIcons';
import Course from 'react-native-vector-icons/AntDesign'



const BottomTab = createMaterialBottomTabNavigator();

export const BottomTabs = ({ navigation }) => {
    return (
        <BottomTab.Navigator headerMode='none'
            initialRouteName="Home"
            activeColor="#3fe342"
            inactiveColor="#fff"
            barStyle={{ backgroundColor: '#ffcc00' }}>
            <BottomTab.Screen name="Tab1" component={tab1}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={20} color={color} />
                    )
                }}/>
            <BottomTab.Screen name="Tab2" component={tab2}
                options={{
                    tabBarLabel: "Class",
                    tabBarIcon: ({ color }) => (
                        <Class name="class" size={20} color={color} />
                    )
                }} />
            <BottomTab.Screen name="Tab3" component={tab3}
                options={{
                    tabBarLabel: "Courses",
                    tabBarIcon: ({ color }) => (
                        <Course name="book" size={20} color={color} />
                    )
                }} />
        </BottomTab.Navigator>

    );
}


export default BottomTabs;