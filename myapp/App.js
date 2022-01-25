import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Components/Home/HomePage';
import Login from './Components/Authentification/LoginPage';

const App = () => {

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello</Text>
          <Login />
          <Home />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
