import React from 'react';
 import screen1 from './drawer/screen1';
 import Screen2 from './drawer/screen2';
 import Screen3 from './drawer/screen3';
 import Screen4 from './Screen4';
 import Screen6 from './screen6';
 import Welcome from './welcome';
 import ImageUpload from './imageUpload';
 import PlaySong from './playSong';
 import FirstComponent from './provider/FirstComponent';
//  import Detail from './Route/detail';

import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();

export const RootStackScreen = ({navigation}) => {
    return(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="show" component = {Screen4} />
        <RootStack.Screen name="showto" component = {Screen6} />
        <RootStack.Screen name="Welcome" component = {Welcome} />
        <RootStack.Screen name="imageUpload" component = {ImageUpload}/>
        <RootStack.Screen name="playme" component = {PlaySong}/>
        <RootStack.Screen name="component" component = {FirstComponent}/>
    </RootStack.Navigator>

);
    }

export default RootStackScreen;