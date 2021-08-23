import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import DogStack from "./DogStack";
import FryStack from "./FryStack";

const RootDrawerNavigator = createDrawerNavigator({
    Dogs: {
        screen: DogStack,
    },
    Fries: {
        screen: FryStack,
    }
}, 
{
    drawerPosition: "right",
},
{
    drawerHideStatusBarOnOpen: true,
}
);

export default createAppContainer(RootDrawerNavigator);