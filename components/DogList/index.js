import React from "react";
import {View, Text, FlatList, Dimensions} from "react-native";
import styles from "./styles";
import dogs from "./dogs";
import FoodItem from "../FoodItem";
import Header from "../Header";

const DogList = () => {
    return(


        <View>
        <Header/>

        <View style={styles.container}>
            <FlatList
                data={dogs}
                renderItem={({item}) => <FoodItem dog={item}/>}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("screen").height}
            />
        </View>
        </View>
    );
};

export default DogList;
