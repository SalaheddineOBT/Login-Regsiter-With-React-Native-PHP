import * as React from 'react';
import { ScrollView } from 'react-native';
import Home from './Components/Home/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/Authentification/LoginPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" options={{title:'Page'}} component={Home} />
        <Stack.Screen options={{title:'Welcom'}} name="Authentification" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
