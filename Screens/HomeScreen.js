/**
 * Firstly the user is given the option to search for a book on the GoodReads website where
 * they can also find reviews. This was done using the web browser API
 * They can also either go to a page that offers the top 10 trending books or top 10 classic books
 */

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { useState } from 'react';
import { View, SafeAreaView, Image, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import * as RootNavigation from '../RootNavigation'
import * as WebBrowser from 'expo-web-browser';

function HomeScreen(props) {
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.goodreads.com/');
        setResult(result);
    };

    return (
        <ImageBackground
            resizeMode="contain"
            style={styles.background}
            source={require("../assets/homeScreen.png")}
        >
           

            <View style={styles.buttons}>
                <Button
                    color="red"
                    title="Find a book on GoodReads"
                    onPress={_handlePressButtonAsync}
                />

                <Button
                    color="blue"
                    title="Trending books"
                    onPress={() => RootNavigation.navigate('Trending')}
                />

                <Button
                    color="black"
                    title="Classic Books"
                    onPress={() => RootNavigation.navigate('Classics')}
                />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffeea9",
        flex: 1,
    },
    container: {
        right: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        height: 70,
    }
})

export default HomeScreen;