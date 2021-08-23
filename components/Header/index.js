import React from "react";
import {View, Text, FlatList, Dimensions, Image, Pressable} from "react-native";
import styles from "./styles";

const Header = (props) => {

    const type = props.type;

    return(
    <View style={styles.container}>
            
            <Image style={styles.logo} source={require("../../assets/otherPics/logoNew.png")}/>

            <Text style={styles.text}>{type}</Text> 
            
            <Pressable
            onPress={() => {
                props.navigation.openDrawer();
            }}>

                <Image style={styles.menu} source={require("../../assets/otherPics/newMenu.png")}/>

            </Pressable>
            

    </View>
    );
};

export default Header;
