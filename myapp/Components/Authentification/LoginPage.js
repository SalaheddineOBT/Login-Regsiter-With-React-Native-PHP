import React,{useState} from 'react';
import { Image,Text, TextInput, View, Pressable,Animated,
TouchableWithoutFeedback, Keyboard } from 'react-native';
import { sha256 } from 'react-native-sha256';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { styles } from './../../Styles/GlobaleStyle';
const Axios=axios.create({
    baseURL:"http://172.16.1.47/API%20Authentification%20with%20PHP/Operations/Athentification/",
});
const LoginPage=({login})=>{
    const value=useState(new Animated.ValueXY({
        x:0,y:760
    }))[0];

    const isLog=(b)=>{
        login(b)
    }

    const move=()=>{
        Animated.timing(
            value,{
            toValue:{x:0,y:760},
            duration:1000,
            useNativeDriver:false
        }).start()
    }
    const back=()=>{
        Animated.timing(
            value,{
                toValue:{x:0,y:-9},
                duration:1000,
                useNativeDriver:false
        }).start()
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}} accessible={false}>
            <View>
                <Image source={require("./../../Images/bg.png")} style={styles.imh} />
                <Login back={back} login={isLog} />
                <Register value={value} move={move} />
            </View>
        </TouchableWithoutFeedback>
    );
};

//Register Form :
const Register=({value,move})=>{

    const [foc1,setfoc1]=useState(false);
    const [foc2,setfoc2]=useState(false);
    const [foc3,setfoc3]=useState(false);
    const [foc4,setfoc4]=useState(false);
    const [pass,setPassword]=useState("");
    const [eml,setEmail]=useState("");
    const [usnam,setUsername]=useState("");
    const [Confirm,setConfirm]=useState("");
    const [passHash,setHach]=useState("");

    //Register Methode :
    const Regsiter=async ()=>{
        if(pass && eml && usnam && Confirm){
            if(pass.length<8){
                alert("Password Must Be At Least 8 char !");
            }else{
                if(pass != Confirm){
                    alert("Confirme Password Is Incorrect !");
                }else{
                    
                    sha256(Confirm).then( (hash) => {
                        setHach(hash);
                    });
                    await Axios.post("Register.php",{
                        username:usnam,
                        password:passHash,
                        email:eml
                    }).then(res=>{
                        if(res.data.success){
                            alert(res.data.message);
                            setPassword("");setUsername("");
                            setEmail("");setHach("");setConfirm("");
                            setfoc1(false);setfoc2(false);
                            setfoc4(false);setfoc3(false);
                        }else {
                            alert(res.data.message);
                        }
                    }).catch(e=>{
                        console.log(e);
                    });
                }
            }
        }else{
            alert("Remplire Tous Les Champs !");
        }
    };
    const Raze=()=>{
        setPassword("");setUsername("");
        setEmail("");setHach("");
        setfoc1(false);setfoc2(false);
        setfoc4(false);setfoc3(false);
        move();
    }

    return(

        <Animated.View style={[styles.Container,value.getLayout()]}>
            <Text style={styles.title}>Register</Text>

            <View style={styles.box}>
                <TextInput style={styles.inputs} value={usnam} onChangeText={(v)=>{
                    setUsername(v);
                    if(v==""){
                        setfoc1(false);
                    }else{
                        setfoc1(true);
                    }
                }} />
                <View pointerEvents='none' style={foc1 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>User Name *</Text>
                </View>
                <Image source={require('./../../Images/User.png')} style={styles.imgs} />
            </View>

            <View style={styles.box}>
                <TextInput style={styles.inputs} value={eml} onChangeText={(v)=>{
                    setEmail(v);
                    if(v==""){
                        setfoc2(false);
                    }else{
                        setfoc2(true);
                    }
                }} />
                <View pointerEvents='none' style={foc2 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Email *</Text>
                </View>
                <Image source={require('./../../Images/Email.png')} style={styles.imgs} />
            </View>

            <View style={styles.box}>
                <TextInput style={styles.inputs} value={pass} secureTextEntry onChangeText={(v)=>{
                    setPassword(v);
                    if(v==""){
                        setfoc3(false);
                    }else{
                        setfoc3(true);
                    }
                }} />
                <View pointerEvents='none' style={foc3 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>

            <View style={styles.box}>
                <TextInput style={styles.inputs} value={Confirm} secureTextEntry onChangeText={(v)=>{
                    setConfirm(v);
                    if(v==""){
                        setfoc4(false);
                    }else{
                        setfoc4(true);
                    }
                }} />
                <View pointerEvents='none' style={foc4 ? styles.diveActivelbl : styles.divlabl} >
                    <Text style={styles.labl}>Confirme Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>

            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>Regsiter()}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Pressable>
            </View>

            <Pressable style={styles.bb} onPress={()=>Raze()}>
                <Text style={styles.lik}> &lt;- Already Have Account -&gt; </Text>
            </Pressable>
        </Animated.View>
    );
};

//Login Form :
const Login=({back,login})=>{

    const [foc1,setfoc1]=useState(false);
    const [foc2,setfoc2]=useState(false);
    const [pass,setPassword]=useState("");
    const [eml,setEmail]=useState("");
    const [passHash,setHach]=useState("");
    const [tokenn,setTokenn]=useState("");

    const Raze=()=>{
        setPassword("");setEmail("");
        setfoc1(false);setfoc2(false);
        back();
    }

    //Login Methode :
    const Loign=async ()=>{
        if(pass && eml){
            if(pass.length < 8){
                alert("Password Must Be At Least 8 Chars !");
            }else{
                sha256(pass).then( (hash) => {
                    setHach(hash);
                });
                await Axios.post("Login.php",{
                    password:passHash,
                    email:eml
                }).then(res=>{
                    if(res.data.success){
                        // alert(res.data.message);
                        setfoc1(false);setfoc2(false);
                        setEmail("");setPassword("");
                        setHach("");
                        login("salaheddine Obt",res.data.success);
                        // setTokenn(res.data.token);
                        // console.log(res.data.token);
                        // const r=home(res.data.token);
                        // console.log(r.data);
                    }else {
                        alert(res.data.message);
                    }
                }).catch(e=>{
                    console.log(e);
                });
                // console.log(tokenn)
                // const r=await home(tokenn);
                // console.log(r);
            }
        }else{
            alert("Remplire Tous Les Champs SVP !");
        }
    };

    const home=async(t)=>{
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+t;
        const p=await Axios.get("Home.php");
        return p;
    }
   
    return(
        <View style={styles.ContainerA}>
            
            <Text style={styles.title}>Login</Text>
            
            <View style={styles.box}>
                <TextInput style={styles.inputs} value={eml} onChangeText={(v)=>{
                    setEmail(v);
                    if(v==""){
                        setfoc1(false);
                    }else{
                        setfoc1(true);
                    }
                }} />
                <View pointerEvents='none' style={foc1 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Email *</Text>
                </View>
                <Image source={require('./../../Images/Email.png')} style={styles.imgs} />
            </View>

            <View style={styles.box}>
                <TextInput style={styles.inputs} value={pass} secureTextEntry onChangeText={(v)=>{
                    setPassword(v);
                    if(v==""){
                        setfoc2(false);
                    }else{
                        setfoc2(true);
                    }
                }} />
                <View pointerEvents='none' style={foc2 ? styles.diveActivelbl : styles.divlabl}>
                    <Text style={styles.labl}>Password *</Text>
                </View>
                <Image source={require('./../../Images/Pass.png')} style={styles.imgs} />
            </View>

            <View style={styles.cont}>
                <Pressable style={styles.btn} onPress={()=>Loign()} >
                    <Text style={styles.btnText}>Sign In</Text>
                </Pressable>
            </View>

            <Pressable style={styles.bb} onPress={()=>Raze()}>
                <Text style={styles.lik}> &lt;- New User -&gt; </Text>
            </Pressable>

            <Text style={styles.spca}>Email *</Text>

        </View>
    );
};

export default LoginPage;