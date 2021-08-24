import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";


import DogStack from "./DogStack";
import FryStack from "./FryStack";
import ExoticStack from "./ExoticStack";

const CustomDrawerComponent= (props) => (
    <SafeAreaView style={{flex: 1}}>
       
        <View style={stylesD.logoView}>
            <Image 
                source={require("../assets/otherPics/logoNew.png")}
                style={stylesD.logo}/>
        </View>
       
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);


const RootDrawerNavigator = createDrawerNavigator({
    Dogs: {
        screen: DogStack,
        navigationOptions: {
            drawerIcon: (
                <Image 
                    source={require("../assets/otherPics/dogIcon.png")}
                    style={{width: 50, height: 40, marginLeft: 20,}}/>
            ),
            contentOptions: {
                labelStyle: {
                    fontSize: 50,
                }
            }
        },
    },
    Fries: {
        screen: FryStack,
        navigationOptions: {
            drawerIcon: (
                <Image 
                    source={require("../assets/otherPics/fryIcon.png")}
                    style={{width: 50, height: 40, marginLeft: 5,}}/>
            ),
        }
    },
    Exotics: {
        screen: ExoticStack,
        navigationOptions: {
            drawerIcon: (
                <Image 
                    source={require("../assets/otherPics/elkIcon.png")}
                    style={{width: 50, height: 40, marginLeft: 5,}}/>
            ),
        }
    }
}, 
{
    drawerPosition: "right",
    drawerHideStatusBarOnOpen: true,
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: "red",
        labelStyle: {
            fontSize: 19,
            fontStyle: "italic",
        }
    }    
}
);

const stylesD = StyleSheet.create({
    logoView: {
        height: 150,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 100,
    },
    dogLogo: {
        width: 10,
        height: 10,
    }
});

export default createAppContainer(RootDrawerNavigator);