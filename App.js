import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mainscreen from './home/Mainscreen';
import Details from './home/Details';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Text>Welcome to your Map App!</Text>

            
    </View>
  );
}



const Tab = createBottomTabNavigator();


export default function App() {
 

  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused 
              ? 'ios-home' 
              : 'ios-home-outline';
            }
            else if (route.name === 'Main Screen') {
              iconName = focused 
              ? 'ios-globe' 
              : 'ios-globe-outline';
            }
            else if (route.name === 'Details') {
              iconName = focused 
              ? 'ios-pin' 
              : 'ios-pin-outline';
            }
             // You can return any component that you like here!
             return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}

        >      
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Main Screen" component={Mainscreen} />
          <Tab.Screen name="Details" component={Details} />
         
        </Tab.Navigator>
      </NavigationContainer>
    
    );
  }

  