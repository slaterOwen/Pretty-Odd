import React from "react";
import {View, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import drinks from "./drinks";
import FoodItem from "../FoodItem";
import { StatusBar } from 'expo-status-bar';


const DrinkList = () => {
    return(

        <View style={styles.outter}>

        <StatusBar translucent={true} />

        <View style={styles.container}>
            <FlatList
                data={drinks}
                renderItem={({item}) => <FoodItem food={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>

        

        </View>
    );
};

export default DrinkList;
