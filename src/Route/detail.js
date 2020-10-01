import React, { Commponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import { styles } from './../Feed/style';

export const Detail = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Detail Screen</Text>
            <Button
                title='View Bottom Tabs'
                onPress={() => {navigation.navigate('BottomTabs')}} />
            <View style={styles.buttun}>
                <Button
                    title='View Top Tabs'
                    onPress={() =>{ navigation.navigate("#")}} />
            </View>
        </View>
    );
}
export default Detail;
const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        marginBottom: 16,
        color: '#116'
    },
    buttun: {
        marginTop: 20
    }
})