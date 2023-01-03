import SelectList from 'react-native-dropdown-select-list';
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const App = () => {

    const [placeName,setplaceName] = React.useState([]);

    useEffect(()=>{
        fetchData()
      },[]);
        
      const fetchData = () => {
        fetch("https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json")
          .then(response => response.json())
          .then(jsonResponse => setUsers(jsonResponse))
          .catch(error => console.log(error))
      };

    return (
        <View style={styles.container}>
    
        <SelectList data={data} setplaceName={setplaceName} />

         </View>
    )
}

export default App;
