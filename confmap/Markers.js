
import React, { useEffect, useState,Component } from "react";
import {View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import Mcolor  from './Colors';
import {useNavigation} from '@react-navigation/native';
// import SelectDropdown from 'react-native-select-dropdown'

// import React, { FC, useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements';

//Init location when open the map Dublin
const Ireland = {
  latitude: 53.3432,
  longitude: -6.2562,
  latitudeDelta:  0.0922,
  longitudeDelta: 0.0421,
};
 


export default function App(){
state = {markerList: [], markers: []}

  const [dataMarkers, setPlaceMarkers] = useState([]);
  const navigation = useNavigation();
  const [dataPlaces, setPlaceTypes] = useState([]);

// Constructor with bind to the onPress function
  // constructor(props) ;{
  //   super(props);
  //  this.onPress = this.onPress.bind(this);
  // }


//Get the data from the API  
  useEffect(()=>{
    Promise.all([
      fetch("https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json"),
      fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json'),
        ])

      .then(([dataMarkers, dataPlaceTypes]) => 
         Promise.all([dataMarkers.json(), dataPlaceTypes.json()])
      )
      .then(([dataMarkers, dataPlaces]) => {
        setPlaceMarkers(dataMarkers);
        setPlaceTypes(dataPlaces);
      });
  },[]);

// function that returns the place type by the name
function getPlacesName(place_type_id) {
  return dataPlaces[place_type_id];
}


// Return place type name according to place_type_id
// function Get_Marker_Type(type_id) {
//   return dataPlaces.map((type) => {
//       if (type.id === type_id) {
//           return type.name;
//       }
//   })
// }


// -------TESTE DROPDOWN LIST ------------------------------------------------------------------------

//Finish the dropdown teste list
// -------------------------------------------------------------------------------------------------


// function that returns the Markers place type by the id
    return (
<View style={styles.container}> 

      <MapView 
        style={styles.map} initialRegion={Ireland}
        
        //trying to creat a markers when click on the map
        onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
        >

        {
              // if state contains marker variable with a valid value, render the marker
              this.state.marker &&
              <MapView.Marker coordinate={this.state.marker} />
        }


        {dataMarkers.map((marker, index) => (

        //Rendering a list of markers on a map     
        <Marker          
          key={index} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} 
          
          //To create a different colour for the type markers
          pinColor={Mcolor(marker.place_type_id)}

          //To drag pins
          draggable={true}
          onDragStart={(e) => {
              console.log('dragStart', e.nativeEvent.coordinate)}}
          onDragEnd={(e) => { 
              console.log('dragStart', e.nativeEvent.coordinate)}}

          
          //To navigate to the details page
          onCalloutPress={() => navigation.navigate( 'Details', { marker: marker})}
          > 
         
            <Callout>
                <View>
                    <Text style={{borderWidth:1,color:"black",fontSize:16,fontWeight:"bold",paddingVertical:10,textAlign:"center"}}>{marker.name}</Text>
                    <Text style={{color:"gray",padding:5}}>Place: {getPlacesName(marker['place_type_id'])?.['name']}</Text>
                    <Text style={{color:"gray",padding:5}}>latitude: {marker.latitude}</Text>
                    <Text style={{color:"gray",padding:5}}>longitude: {marker.longitude}</Text>
                </View>     
            </Callout>

    </Marker>  
))}

        {/* { <Circle color = "rgba(0,0,0,0.1)" fillColor = "rgba(0,0,0,0.1)"
          center={{ latitude: Ireland.latitude, longitude: Ireland.longitude}}
          radius={1000}
          /> } */}

</MapView>


</View>

)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
    
  },
});

//Callout is a popup that appears when you click on a marker it showns the details of the marker

