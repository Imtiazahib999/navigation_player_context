import React, { Commponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'
import { color } from 'react-native-reanimated';

export const Feed = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button
                title='Go to Feed Items'
                //onPress={() => this.props.navigation.push("DrawerOpen")}
                // onPress={()=> navigation.push("Detail")}
                onPress={() => { navigation.openDrawer() }}
            />
            <View style={styles.buttun}>
                <Button

                    title='Go to Details'
                    onPress={() =>navigation.navigate("Detail")}
                />
            </View>
            <View style={styles.buttun}>
                <Button
                    title='Open Bottom'
                    onPress={() => { navigation.navigate("BottomTabs") }}
                />
            </View>
            <View style={styles.buttun}>
                <Button
                    title='Open Screen'
                    onPress={() => { navigation.navigate("RouteStackScreen") }}
                />
            </View>
        </View>
    );
};

export default Feed;

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        marginBottom: 16,
        color: '#116',
      
    },
    buttun: {
        marginTop: 20,
        color:'#ffcc00',
        
    }
})