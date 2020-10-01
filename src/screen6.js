import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';
// import { styles } from './Feed/style';
import IcIcon from 'react-native-vector-icons/MaterialIcons';
    export const Screen6 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ height: ('9%'), }}>
                <View style={{ marginHorizontal: ('5%'), marginTop: ('2%'), }}>
                    <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                        onPress={ () => navigation.goBack()} />
                </View>
                <View style={styles.center}>
                    <Text style={styles.title}>Screen 6 </Text>
                </View>
                <View style={styles.buttun}>
                <Button
                    title='View Top Tabs'
                    onPress={() =>{ navigation.navigate("home")}} />
            </View>
            </View> 
            </View>
)
}
export default Screen6;
const styles = StyleSheet.create({
                container: {
                flex: 1,
        backgroundColor: '#fff',
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:36,
        marginBottom:16,
        color: '#000'
    },
})
