import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { ThemeContext } from './appContext';

class ThirdComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            context: null
        }
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         alert(this.state.context.provider.state.userName)
    //     },100)
    // }
    
    setContextApi = (context) => {
        this.state.context = context;
        return null;
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) =>
                    <View style={styles.container}>
                        {this.setContextApi(context)}
                        <Text style={styles.title}>{context.provider.state.userName}</Text>
                        <Text style={styles.subtitle}>Email:{context.provider.state.userEmail} </Text>
                        <TextInput style={styles.input}
                            placeholder='name' />
                        <TextInput style={styles.input}
                            placeholder='calories' 
                            />
                    </View>}
            </ThemeContext.Consumer>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    },
    title: {
        fontSize: 40,
        color: 'purple'
    },
    subtitle: {
        fontSize: 30,
        color: 'purple'
    },
    input: {
        height: 20,
        width: 50,
    }
})
export default ThirdComponent;