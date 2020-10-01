import React, {Commponent} from 'react';
import {View,Text,Button} from 'react-native';
import {styles} from './../Feed/style';
import Back from 'react-native-vector-icons/MaterialIcons'
export const tab1 = ({navigation}) => {
    return(
        <View>
            <Back name="keyboard-arrow-left" size ={40} color ='#000'
            onPress = {() =>navigation.goBack() } />
            <Text style={styles.title}>Home Screen</Text>
        </View>
        );
}
export default tab1;