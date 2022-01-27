import React,{useState} from 'react';
import { StyleSheet, Image, Animated,ScrollView,
  Text, TextInput, View, Pressable,
  Alert, TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobaleStyles } from '../../Styles/GlobaleStyle';

const LoginPage=({navigation})=>{

    const [isLog,setIslog]=useState(true);

    const SignUp=()=>{
        Alert.alert("OOOPS !","Clickable .....",[
            {text:"Yes",onPress:()=>console.log("alert closed !")}
        ]);
    };

    const SignIn=()=>{
        // Alert.alert("OOOPS !","Clickable ....",[
        //     {text:"Yes",onPress:()=>console.log("alert closed !")}
        // ]);
        navigation.navigate('Home');
    };

    const logact=(d)=>{
        setIslog(d);
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss() }}>
            <View style={styles.contnn}>
                <Register SignUp={SignUp} logact={logact} />
                <Login SignIn={SignIn} logact={logact} islog={isLog} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const Register=({SignUp,logact})=>{

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
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
            </View>
            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>logact(true)}>
                    <Text style={styles.btnText}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
};

const Login=({SignIn,logact,islog})=>{

    const [foc1,setfoc1]=useState(false);
    const [foc2,setfoc2]=useState(false);

    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const [error,setError]=useState({});

    return(
        <View style={islog ? styles.ContainerA : styles.ContainerL}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.box}>
                <TextInput style={styles.inputs} onChangeText={(v)=>{
                    setEmail(v);
                    if(v==""){
                        setfoc1(false)
                    }else{
                        setfoc1(true)
                    }
                }} />
                <Text style={styles.errors}>{error.email}</Text>
                <View pointerEvents='none' style={foc1 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Email *</Text>
                </View>
                <Image source={require('./../../Images/Email.png')} style={styles.imgs} />
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputs} secureTextEntry onChangeText={(v)=>{
                    setPassword(v);
                    if(v==""){
                        setfoc2(false)
                    }else{
                        setfoc2(true)
                    }
                }} />
                <Text style={styles.errors}>{error.password}</Text>
                <View pointerEvents='none' style={foc2 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>
            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>SignIn()}>
                    <Text style={styles.btnText}>Sign In</Text>
                </Pressable>
            </View>
            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>logact(false)}>
                    <Text style={styles.btnText}>Sign Up</Text>
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
        fontFamily:"Overpass-MediumItalic"
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
        marginBottom:10,
        paddingLeft:25,
        fontSize:19,
        color:"red",
        fontWeight:"700"
    },
    ContainerL:{
        padding:20,
        flex:1,
        paddingLeft:30,
        paddingRight:30,
        position:"absolute",
        top:0,
        left:-500,
        height:610,
        backgroundColor:"#DABCA8"
    },
    ContainerA:{
        padding:20,
        flex:1,
        paddingLeft:30,
        paddingRight:30,
        position:"absolute",
        top:0,
        left:0,
        height:610,
        backgroundColor:"#DABCA8"
    },
    contnn:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"#DABCA8"
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
        width:350,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        color:"#222",
        fontSize:20,
        fontWeight:"700",
    },
    cont:{
        marginTop:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
});

export default LoginPage;