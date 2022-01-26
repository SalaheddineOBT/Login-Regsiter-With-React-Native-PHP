import React,{useState} from 'react';
import { StyleSheet, Image, Animated,
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
            {/* <Register SignUp={SignUp} /> */}
            <Login SignIn={SignIn} />
        </TouchableWithoutFeedback>
    );
};

const Register=({SignUp})=>{

    const [foc1,setfoc1]=useState(false);
    const [foc2,setfoc2]=useState(false);
    const [foc3,setfoc3]=useState(false);
    const [foc4,setfoc4]=useState(false);

    return(
        <View style={styles.Container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.box}>
                <TextInput style={styles.inputs} onChangeText={(v)=>{
                    if(v==""){
                        setfoc1(false)
                    }else{
                        setfoc1(true)
                    }
                }} />
                <View pointerEvents='none' style={foc1 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>User Name *</Text>
                </View>
                <Image source={require('./../../Images/User.png')} style={styles.imgs} />
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputs} onChangeText={(v)=>{
                    if(v==""){
                        setfoc2(false)
                    }else{
                        setfoc2(true)
                    }
                }} />
                <View pointerEvents='none' style={foc2 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Email *</Text>
                </View>
                <Image source={require('./../../Images/Email.png')} style={styles.imgs} />
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputs} secureTextEntry onChangeText={(v)=>{
                    if(v==""){
                        setfoc3(false)
                    }else{
                        setfoc3(true)
                    }
                }} />
                <View pointerEvents='none' style={foc3 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputs} secureTextEntry onChangeText={(v)=>{
                    if(v==""){
                        setfoc4(false)
                    }else{
                        setfoc4(true)
                    }
                }} />
                <View pointerEvents='none' style={foc4 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Confirme Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>
            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>SignUp()}>
                    <Text style={styles.btnText}>Inscription</Text>
                </Pressable>
            </View>
        </View>
    );
};

const Login=({SignIn})=>{

    const [foc1,setfoc1]=useState(false);
    const [foc2,setfoc2]=useState(false);

    return(
        <View style={styles.Container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.box}>
                <TextInput style={styles.inputs} onChangeText={(v)=>{
                    if(v==""){
                        setfoc1(false)
                    }else{
                        setfoc1(true)
                    }
                }} />
                <Text style={styles.errors}>Error</Text>
                <View pointerEvents='none' style={foc1 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Email *</Text>
                </View>
                <Image source={require('./../../Images/Email.png')} style={styles.imgs} />
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputs} secureTextEntry onChangeText={(v)=>{
                    if(v==""){
                        setfoc2(false)
                    }else{
                        setfoc2(true)
                    }
                }} />
                <Text style={styles.errors}>Error</Text>
                <View pointerEvents='none' style={foc2 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>
            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>SignIn()}>
                    <Text style={styles.btnText}>Connexion</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:"800",
        textAlign:"center",
        marginBottom:40,
    },
    divlabl:{
        position:"absolute",
        marginBottom:9,
        paddingLeft:65,
        top:21.5,
        opacity:1,
    },
    diveActivelbl:{
        position:"absolute",
        marginBottom:9,
        paddingLeft:20,
        top:21.5,
        opacity:0
    },
    labl:{
        fontSize:20,
        fontWeight:"700",
        color:"#000",
    },
    inputs:{
        borderWidth:2,
        fontSize:17,
        padding:10,
        borderRadius:30,
        paddingLeft:65,
        marginBottom:10,
        marginTop:10,
    },
    errors:{
        marginBottom:20,
        paddingLeft:25,
        fontSize:19,
        color:"red",
    },
    Container:{
        padding:20,
        paddingLeft:30,
        paddingRight:30,
    },
    box:{
        position:"relative",
    },
    imgs: { 
        width: 40,
        height: 40,
        position:"absolute",
        top:16,left:15,
    },
    btn:{
        padding:20,
        backgroundColor:"#7EBBCF",
        width:200,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        color:"#222",
        fontSize:20,
        fontWeight:"700"
    },
    cont:{
        marginTop:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
});

export default LoginPage;