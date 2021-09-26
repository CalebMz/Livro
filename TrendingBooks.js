/**
 * Contents for trending books are housed in a container to allow for easy updates
 */

//--------------------------------------------------------------------------------------------------------

import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, ImageBackground, Text, Button, FlatList} from 'react-native';
import { useEffect, useState } from 'react';
import TrendingComponent from './TBooksContainer';

function TrendingBooks(props) {
    return(
        <View>
            <TrendingComponent></TrendingComponent>
        </View>
  );
}

export default TrendingBooks;