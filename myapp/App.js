import React,{ useState } from 'react';
import Home from './Components/Home/HomePage';
import LoginPage from './Components/Authentification/LoginPage';
import { View } from 'react-native';
import { styles } from './Styles/GlobaleStyle';

const App = () => {
  const [username,setUsername]=useState("");

  const login=(tok)=>{
    setUsername(tok);
  }

  const logout=()=>{
    setUsername("");
  }

  return (
      <View style={styles.contttt}>
        {username != "" ? (
          <Home username={username} logout={logout} />
        ):(
          <LoginPage login={login} />
        )}
      </View>
  );
};

export default App;
