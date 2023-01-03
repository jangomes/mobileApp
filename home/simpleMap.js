import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { Marker, Callout} from 'react-native-maps';

export default function Screenmap() {

  return (
    <View style={styles.container}>

      <MapView style={styles.map}
      initialRegion={{
        latitude: 53.34981,
        longitude: -6.26031,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >


        <Marker
          coordinate={{ latitude: 53.4129, longitude: -6.26031 }}
          pinColor='blue'
        >
       
       <Callout>
        <Text>Hi</Text>
        </Callout>

        </Marker>


      </MapView>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});