import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/Header";
import React from "react";
import DrinkList from "../components/DrinkList";

const screens = {
    Drinks: {
        screen: DrinkList,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} type={"Drinks"} />,
            }
        }
    },
}

const DrinkStack = createStackNavigator(screens);

export default DrinkStack;