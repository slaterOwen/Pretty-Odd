import React from "react";
import {View, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import dogs from "./dogs";
import FoodItem from "../FoodItem";
import { StatusBar } from 'expo-status-bar';


const DogList = () => {
    return(

        <View style={styles.outter}>

        <StatusBar hidden />

        <View style={styles.container}>
            <FlatList
                data={dogs}
                renderItem={({item}) => <FoodItem food={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>

        

        </View>
    );
};

export default DogList;
