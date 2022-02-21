import React,{ useState } from 'react';
import Home from './Components/Home/HomePage';
import LoginPage from './Components/Authentification/LoginPage';
import { View } from 'react-native';
import { styles } from './Styles/GlobaleStyle';

const App = () => {
  const [username,setUsername]=useState("");
  const [id,setid]=useState("");

  const login=(tok,d)=>{
    setUsername(tok);
    setid(d);
  }

  const logout=()=>{
    setUsername("");
  }

  return (
      <View style={styles.contttt}>
        {username != "" ? (
          <Home username={username} id={id} logout={logout} />
        ):(
          <LoginPage login={login} />
        )}
      </View>
  );
};

export default App;
