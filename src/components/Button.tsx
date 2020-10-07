import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import R from 'res/R';

interface ButtonProps {
    title: string,
    onPress: () => void
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: R.colors.gold,
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF"
    }
});
