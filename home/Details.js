import { View, Text, Image, Button } from 'react-native';
import React, { Component, useState } from 'react';
import {useNavigation} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainscreen from './Mainscreen';
import {getPlacesTypeName} from '../confmap/Markers'


export default class Details extends Component {
  
    
  constructor(props) {
    super(props);
   this.state = {
    params: props.route.params,
   };
  }

  

  render() {
    // const marker = this.props.route.parameters.marker;
    
  return (
    
    <View style={{borderWidth:2, borderRadius:10, paddingTop: 20, padding:20, justifyContent:'center' }}> 
      <Image source={{uri: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT3gfaKbCl9h0gplrhrZXatTan7HLbmofmvo7IuBGogeInMOS-P0NHgmMIparFgho9s'}}  style={{width: 370, height: 400, justifyContent:'center'}} />
      <Text style={{fontWeight:"bold" ,textAlign:'justify', paddingTop: 20}}>{this.props.route.params.marker.name}</Text>    
      <Text>Gaelic_name: {this.props.route.params.marker.gaelic_name}</Text>
      <Text>Latitude: {this.props.route.params.marker.latitude}</Text>
      <Text>Longitude: {this.props.route.params.marker.longitude}</Text>
      <Button title="Go back" onPress={() => this.props.navigation.goBack('Mainscreen')} />
    </View>
  );
  }
  

}



