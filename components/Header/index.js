import React from "react";
import {View, Text, FlatList, Dimensions, Image, Pressable} from "react-native";
import styles from "./styles";

const Header = () => {
    return(
    <View style={styles.container}>
            
            <Image style={styles.logo} source={require("../../assets/otherPics/logoNew.png")}/>
            
            <Pressable
            onPress={() => {
                console.warn("Menu was pressed");
            }}>

                <Image style={styles.menu} source={require("../../assets/otherPics/newMenu.png")}/>

            </Pressable>
            

    </View>
    );
};

export default Header;
