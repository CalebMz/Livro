/**
 * The Welcome screen offers a button for users to proceed to the home page where they can select 
 * one of the three options available to help them find their next book
 */

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../RootNavigation'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode='stretch'
            style={styles.background}
            source={require("../assets/welcomeScreen2.png")}
        >
            <View style={styles.button}>
                <Button
                    color="#03989E"
                    title="Click here to get started"
                    onPress={() => RootNavigation.navigate('Home')}
                />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '50%',
        height: 100,
        bottom: 300,
    }
})

export default WelcomeScreen;