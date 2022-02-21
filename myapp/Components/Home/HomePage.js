import { transform } from '@babel/core';
import React, { useEffect } from 'react';
import {Pressable, Text, View, Image} from 'react-native';
// import axios from 'axios';
import { styles } from './../../Styles/GlobaleStyle';

const Home=({username,id,logout})=>{

  // useEffect(async () => {
  //   if(id){
  //    await axios.get(`http://172.16.1.47/API%20Authentification%20with%20PHP/Operations/Athentification/Home.php?id=${id}`).then(re=>{
  //      console.log(res)
  //    }).catch(e=>{
  //      console.log(e);
  //    })

  //   }else{
  //     logout();
  //   }
  // });
  
  return (
    <View style={styles.home}>
      <View style={styles.containerr}>
        <View style={styles.imgdv}>
          <Image source={require('./../../Images/User.png')} style={[styles.imghome,{transform:[{scale:1.65}]}]} />
        </View>
        
        <View style={styles.inf}>
          <Text style={styles.txtus}>{username}</Text>
          <Pressable onPress={()=>logout()} style={styles.btnLogout}>
            <Text style={styles.txt}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
};

export default Home;