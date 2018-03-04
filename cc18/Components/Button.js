import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress,children}) => {
    return (
        <TouchableOpacity onPress = {onPress} style ={styles.button}>
        <Text style ={styles.text}>{children}</Text>
     
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        marginTop: 35,
        // display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "7%",
        // height: "auto",
        width: '50%',
        backgroundColor: "transparent",
        borderRadius: 0,
        alignItems: 'center',
    },

    text: {
        color: 'transparent',
        fontWeight: '700',
        fontSize: 18,
    }
});

export {Button};

