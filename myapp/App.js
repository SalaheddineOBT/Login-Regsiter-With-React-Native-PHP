import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Components/Home/HomePage';
import LoginPage from './Components/Authentification/LoginPage';

const App = () => {

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <LoginPage />
          {/* <Home /> */}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
