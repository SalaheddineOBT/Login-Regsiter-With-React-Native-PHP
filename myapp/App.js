import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Home from './Components/Home/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './Components/Authentification/LoginPage';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
    // <ScrollView contentInsetAdjustmentBehavior="automatic"> 
      
    //   <LoginPage />
    //   {/* <Home /> */}
        
    // </ScrollView>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Authentification" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
