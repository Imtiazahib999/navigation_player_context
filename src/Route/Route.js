import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import home from './home';

const Route = createStackNavigator({
    home: {
      screen:home,
      navigationOptions: {
        headerShown: false
      }
    },
})
export default Route;