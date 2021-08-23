import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#444444",
        width: "100%",
        height: 70,
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 40,
        resizeMode: "contain",
        marginTop: 15,
    },
    menu: {
        marginTop: 15,
        width: 75,
        height: 50,
        resizeMode: "contain",
    },
    text: {
        color: "white",
        fontSize: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginRight: 5,
        marginTop: 15,
        fontStyle: "italic",
        fontWeight: "600"
    },

});

export default styles;