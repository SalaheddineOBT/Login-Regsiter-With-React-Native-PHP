import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Home=({navigation})=>{
    return(
        <View>
            <Text>Home</Text>
            <Button title='Press me' onPress={()=>navigation.goBack()} />
        </View>
    )
}

export default Home;