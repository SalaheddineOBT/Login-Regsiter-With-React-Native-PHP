import React,{useState} from "react";
import { View, Text,FlatList } from "react-native";

export default function Reviews(){

    const [review,setReview]=useState([
        { title:"Fresh Air",rating:5,body:'lorem ipsum',key:1 },
        { title:"Catch Them",rating:9,body:'lorem ipsum',key:2 },
        { title:"Not So",rating:5,body:'lorem ipsum',key:3 }
    ]);

    return(
        <View>
            <Text>List Of Reviews :</Text>
        </View>
    )
}