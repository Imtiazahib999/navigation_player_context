import React, {Commponent} from 'react';
import {View,Text,Button} from 'react-native';
import {styles} from './../Feed/style';
export const tab2 = ({ navigation }) => {
       return(
        <View style={styles.center}>
        <Text style={styles.title}>Class</Text>
        <Button
            title='Go to Feed Items'
            //onPress={() => this.props.navigation.push("DrawerOpen")}
            // onPress={()=> navigation.push("Detail")}
            onPress={() => { navigation.openDrawer() }}
        />
    </View>
       );
}
export default tab2