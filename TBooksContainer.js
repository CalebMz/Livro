/**
 * This container has the top 10 trending books
 */

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text,} from 'react-native';

export default function TrendingComponent() {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'red', textAlign: 'center'}}>Top 10 Trending</Text>

            <Text>
                1. More Than Love, A Husbands Tale by Peter B.Forster
            </Text>

            <Text>
                2. Toe to Toe by Deborah Leblanc
            </Text>

            <Text>
                3. Crossroads and Himalayen Crystals by C.Toni Graham
            </Text>

            <Text>
                4. Mistress Suffragette by Diana Forbes
            </Text>

            <Text>
                5. Worm Holes by Kyle Keyes
            </Text>

            <Text>
                6. Dodging Satan: My Irish/Italian, Sometimes Awesome, But Mostly Creepy, Childhood by Kathleen Zamboni McCormick
            </Text>

            <Text>
                7. UNDER THE BUS by Kyle Keyes
            </Text>

            <Text>
                8. Shot Down: The True Story of Pilot Howard Snyder and the Crew of the B-17 Susan Ruth by Steve Snyder
            </Text>

            <Text>
                9. A Gallery of Mothers (Brathius History #2) by J.S. Latshaw
            </Text>

            <Text>
                10. Quantum Roots (Quantum Roots, #1) by Kyle Keyes
            </Text>
        </View>
    );
    }
const styles=StyleSheet.create({
    container: {
        fontSize: 18,
        left: 5,
        justifyContent: 'space-between'
    }
})
