import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Left from 'react-native-vector-icons/MaterialIcons'
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
export const Welcome = ({ navigation }) => {
    return (
        <View style={styles.welcomeContainer}>
            <View style={{ height: hp('10%'), backgroundColor: 'red' }}>
                <View style={{ marginHorizontal: wp('5%'), flexDirection: 'row', }}>
                    <Left name={'keyboard-arrow-left'} size={40} color='#000' />
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>HEADER </Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.firstView}>
                        <View style={styles.innerView}>
                            <Text style={styles.textContainer}>Hello</Text>
                        </View>
                        <View style={styles.innerView}>
                            <Text style={styles.textContainer}>Hello</Text>
                        </View>
                    </View>
                    <View style={styles.secondView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.secondView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                            <Text style={styles.textContainer}>HELLO WORLD</Text>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.secondView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{backgroundColor:'#975',width: 100,alignItems: 'center',justifyContent: 'center', height: 100}}>
                                <Image style={{ height: 50, width: 50, borderRadius: 5, borderRadius:50,}}
                                    source={require('./../src/Feed/user2.jpg')} />
                            </View>
                            <Text style={styles.textContainer}>HELLO WORLD</Text>
                        </View>
                    </View>
                    <View style={styles.thirdView}>
                        <View style={{ backgroundColor: 'green' }}>
                            <Text style={{ fontSize: 15, }}>Press the side Button</Text>
                        </View>
                        <TouchableOpacity style={styles.opacity}>
                            <Text style={{ width: 100, textAlign: 'center' }}>Press Me</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.opacity}
                     onPress={() =>navigation.navigate('imageUpload')}>
                        <Text>Click Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opacity}
                     onPress={() =>navigation.navigate('playme')}>
                        <Text>Play Song</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opacity}
                     onPress={() =>navigation.navigate('component')}>
                        <Text>Context Api</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}
export default Welcome;
const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: window.width,
    },
    main: {
        marginHorizontal: wp('5%'),
        // height:660,
        // backgroundColor:'grey'
    },
    firstView: {
        flexDirection: 'row',
        height: 150,
        marginVertical: hp('2%'),
        justifyContent: 'space-between'
    },
    innerView: {
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        // height: ('100%'),
        width: ('48%'),
        justifyContent: 'center',
        borderRadius: 5,
    },
    textContainer: {
        fontSize: 10,
        fontWeight: 'bold',
        marginHorizontal: wp('5%'),
        color:'#000'
    },

    secondView: {
        backgroundColor: 'red',
        height: 100,
        // justifyContent:'center',
        marginVertical: hp('2%'),
        borderRadius: 5,
        // alignItems:'center'
    },
    opacity: {
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        borderRadius: 5,
        height: 50,
        marginTop:10,
        alignItems: 'center'
    },
    thirdView: {
        backgroundColor: 'grey',
        marginVertical: hp('2%'),
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})
