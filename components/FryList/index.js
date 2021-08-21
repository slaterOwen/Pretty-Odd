import React from "react";
import {View, Text, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import fries from "./fries";
import FoodItem from "../FoodItem";
import Header from "../Header";

const FryList = () => {
    return(


        <View>
        <Header type={"Fries"}/>
        <View style={styles.container}>
            <FlatList
                data={fries}
                renderItem={({item}) => <FoodItem food={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>
        </View>
    );
};

export default FryList;
