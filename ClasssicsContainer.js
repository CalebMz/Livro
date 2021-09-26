/** 
 * This container has the top 10 weekly classics
*/

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text,} from 'react-native';

export default function ClassicsComponent() {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'red', textAlign: 'center'}}>This Weeks Classics</Text>

            <Text>
                1. Pride and Prejudice by Jane Austen
            </Text>

            <Text>
                2. The Great Gatsby by F. Scott Fitzgerald
            </Text>

            <Text>
                3. Nineteen Eighty-Four by George Orwell
            </Text>

            <Text>
                4. Wuthering Heights by Emily Brontë
            </Text>

            <Text>
                5. To Kill a Mockingbird by Harper Lee
            </Text>

            <Text>
                6. The Catcher in the Rye by J. D. Salinger
            </Text>

            <Text>
                7. Adventures of Huckleberry Finn by Mark Twain
            </Text>

            <Text>
                8. Moby Dick by Herman Melville
            </Text>

            <Text>
                9. Jane Eyre by Charlotte Brontë
            </Text>

            <Text>
                10. Little Women by Louisa May Alcott
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