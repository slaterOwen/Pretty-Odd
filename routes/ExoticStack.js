import { createStackNavigator } from "react-navigation-stack";
import ExoticList from "../components/ExoticList";
import Header from "../components/Header";
import React from "react";

const screens = {
    Exotics: {
        screen: ExoticList,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} type={"Exotics"} />,
            }
        }
    },
}

const ExoticStack = createStackNavigator(screens);

export default ExoticStack;