import { createStackNavigator } from "react-navigation-stack";
import DogList from "../components/DogList";
import Header from "../components/Header";
import React from "react";

const screens = {
    Dogs: {
        screen: DogList,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} type={"Dogs"} />,
            }
        }
    },
}

const DogStack = createStackNavigator(screens);

export default DogStack;