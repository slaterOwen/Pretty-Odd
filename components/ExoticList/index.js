import React from "react";
import {View, FlatList, Dimensions, SafeAreaView, Platform} from "react-native";
import styles from "./styles";
import exotics from "./exotics";
import FoodItem from "../FoodItem";
import Header from "../Header";
import { StatusBar } from 'expo-status-bar';


const ExoticList = () => {
    return(

        <View style={styles.outter}>

        <StatusBar translucent={true} />

        <View style={styles.container}>
            <FlatList
                data={exotics}
                renderItem={({item}) => <FoodItem food={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>

        </View>
    );
};

export default ExoticList;
