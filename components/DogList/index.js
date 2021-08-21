import React from "react";
import {View, Text, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import dogs from "./dogs";
import FoodItem from "../FoodItem";

const DogList = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data={dogs}
                renderItem={({item}) => <FoodItem dog={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>
    );
};

export default DogList;
