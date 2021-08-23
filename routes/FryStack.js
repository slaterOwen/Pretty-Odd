import { createStackNavigator } from "react-navigation-stack";
import FryList from "../components/FryList";
import Header from "../components/Header";
import React from "react";

const screens = {
    Fries: {
        screen: FryList,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} type={"Fries"} />,
            }
        }
    },
}

const FryStack = createStackNavigator(screens);

export default FryStack;