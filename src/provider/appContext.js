import React, { Component } from 'react';
export const ThemeContext = React.createContext({});
export class ThemeProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'ABC',
            userEmail: 'abc@gmail.com',
            userPhone: '+923331234567'
        }
    }
    render() {
        return (
            <ThemeContext.Provider
                value={{ provider: this, }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}