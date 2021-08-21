import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 5,
        backgroundColor: "#444444",
        height: 57,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    menu: {
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
        marginRight: 25,
        fontStyle: "italic",
        fontWeight: "600"

    },

});

export default styles;