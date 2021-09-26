import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, View, ImageBackground } from 'react-native';
import * as RootNavigation from './RootNavigation'
export default function Footer(props) {
    return (
        <View style={styles.footer}>
            <Button
                style={styles.button}
                color="blue"
                title="Click here to get started"
                onPress={() => RootNavigation.navigate('home')}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    button: {
        bottom: 155,
        padding: 20
    }
    
});