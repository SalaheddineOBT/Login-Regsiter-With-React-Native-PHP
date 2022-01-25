import React from 'react';
import { StyleSheet,
  Text, TextInput, View, Pressable,
  Alert, TouchableWithoutFeedback,
  Keyboard } from 'react-native';

const LoginPage=()=>{

    const SignUp=()=>{
        Alert.alert("OOOPS !","Clickable .....",[
            {text:"Yes",onPress:()=>console.log("alert closed !")}
        ]);
    };

    const SignIn=()=>{
        Alert.alert("OOOPS !","Clickable ....",[
            {text:"Yes",onPress:()=>console.log("alert closed !")}
        ]);
    };

    return(
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
            <Register SignUp={SignUp} />
            {/* <Login SignIn={SignIn} /> */}
        </TouchableWithoutFeedback>
    );
};

const Register=({SignUp})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.labl}>User Name *</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your User Name :' />
            <Text style={styles.labl}>Email *</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your Email :' />
            <Text style={styles.labl}>Password *</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your Password :' secureTextEntry />
            <Text style={styles.labl}>Comfirme Password *</Text>
            <TextInput style={styles.inputs} placeholder='Confirme Your Password :' secureTextEntry />
            <Pressable onPress={()=>SignUp()}>
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    );
};

const Login=({SignIn})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.labl}>Email *</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your Email :' />
            <Text style={styles.labl}>Password *</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your Password :' secureTextEntry />
            <Pressable onPress={()=>SignIn()}>
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    );
};

const styles=StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:"800",
        textAlign:"center",

    },
    labl:{

    }
});

export default LoginPage;