
import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global.js';

export  default function Header(){
    return(
        <View style={globalStyles.Header}>
            <Text style={globalStyles.HeaderText}>My Maps App</Text>
        </View>
    )
}

