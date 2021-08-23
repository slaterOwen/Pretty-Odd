import React from "react";
import {View, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import dogs from "./dogs";
import FoodItem from "../FoodItem";
import Header from "../Header";
import { StatusBar } from 'expo-status-bar';


const DogList = () => {
    return(

        <View style={styles.outter}>

       
        
       

        <View style={styles.container}>
            <FlatList
                data={dogs}
                renderItem={({item}) => <FoodItem food={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>

        <StatusBar style="auto" />
        </View>
    );
};

export default DogList;
