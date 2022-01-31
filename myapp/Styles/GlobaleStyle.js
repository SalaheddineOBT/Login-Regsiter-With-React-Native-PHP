import React from "react";
import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    Cont:{
        backgroundColor:"#000",
        color:"#eee",
    },
    divimg:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden",
        height:100,
        width:100,
        marginBottom:20,
        borderRadius:500,
        borderColor:"#fff",
        borderWidth:3,
    },
    dv:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    img:{
        height:70,
        borderColor:"#000",
    },
    title:{
        fontSize:40,
        fontWeight:"800",
        textAlign:"center",
        marginBottom:40,
        color:"#eee",
        fontFamily:"Overpass-MediumItalic"
    },
    divlabl:{
        position:"absolute",
        marginBottom:9,
        paddingLeft:65,
        top:23,
        opacity:1,
    },
    diveActivelbl:{
        position:"absolute",
        marginBottom:9,
        paddingLeft:20,
        top:23,
        opacity:0
    },
    labl:{
        fontSize:20,
        fontWeight:"700",
        color:"#fff",
    },
    inputs:{
        borderWidth:2,
        fontSize:22,
        padding:11,
        borderRadius:30,
        fontWeight:"500",
        borderColor:"#fff",
        color:"#fff",
        paddingLeft:65,
        marginBottom:5,
        marginTop:10,
    },
    errors:{
        marginBottom:4,
        paddingLeft:25,
        fontSize:19,
        color:"red",
        fontWeight:"700"
    },
    ContainerL:{
        padding:20,
        flex:1,
        position:"absolute",
        top:0,
        left:-500,
        height:700,
        backgroundColor:"#0C3B2E"
    },
    ContainerA:{
        padding:20,
        flex:1,
        position:"absolute",
        top:0,
        left:0,
        height:760,
        backgroundColor:"#0C3B2E"
    },
    contnn:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"#0C3B2E"
    },
    Container:{
        padding:20,
        paddingLeft:30,
        paddingRight:30,
    },
    box:{
        position:"relative",
        width:350
    },
    imgs: { 
        width: 40,
        height: 40,
        position:"absolute",
        top:17.5,left:15,
    },
    btn:{
        padding:10,
        backgroundColor:"#FFB100",
        width:250,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        color:"#FFF",
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