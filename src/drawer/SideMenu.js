import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,

    Paragraph,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
//import { styles } from '../Feed/style';


export function SideMenu({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#38B54A', borderBottomRightRadius: 30, borderTopRightRadius: 30 }}>
            <View >
                <ScrollView>
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('showMe')} >
                            <Text style={{ fontSize: 25, marginTop: 20 }}>FILTERS</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Difficuty</Text>
                        </View>
                        <View >
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, borderWidth: .5, marginTop: 5, width: ('90%') }}>
                    </View>
                    {/* Author */}
                    <View style={{ marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Author</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, borderWidth: .5, marginTop: 5, width: ('90%') }}>
                    </View>

                    {/* Category */}
                    <View style={{ marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Category</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, borderWidth: .5, marginTop: 5, width: ('90%') }}>
                    </View>

                    {/*  Duration*/}
                    <View style={{ marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Duration</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, borderWidth: .5, marginTop: 5, width: ('90%') }}>
                    </View>

                    {/* Formation */}
                    <View style={{ marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Formation</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, borderWidth: .5, marginTop: 5, width: ('90%') }}>
                    </View>
                    {/*  extra work for scroll */}
                    {/* Formation */}
                    <View style={{ marginLeft: 20 }}>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: 20 }}>Formation</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 1</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 2</Text>
                        </View>
                        <View>
                            <Text style={styles.colortext}>Option 3</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}

// export default sideMenu
const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    colortext: {
        color: 'white'
    },

});