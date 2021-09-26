/**
 * The classic books table is also stored in a container and imported to allow for easy weekly updates
 */

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, ImageBackground, Text, Button, FlatList} from 'react-native';
import { useEffect, useState } from 'react';
import ClassicsComponent from './ClasssicsContainer';

function Classics(props) {
    return(
        <View>
            <ClassicsComponent></ClassicsComponent>
        </View>
  );
}

export default Classics;