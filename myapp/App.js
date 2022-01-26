import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Home from './Components/Home/HomePage';
import LoginPage from './Components/Authentification/LoginPage';

const App = () => {

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
        <>
          <LoginPage />
          {/* <Home /> */}
        </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
