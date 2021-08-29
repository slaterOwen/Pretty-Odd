import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outterContainer: {
        width: "100%",
        height: Dimensions.get("screen").height,
        backgroundColor: "black",
        alignItems: "center"
    },
    logoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
    },
    logo: {
        width: 250,
        height: 125,
    },
    titles: {
        width: "100%",
        alignItems: "center",
        marginTop: "10%",
    },
    title: {
        color: "white",
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "600"
    },
    inputField: {
        borderWidth: 3, 
        borderColor: "white", 
        borderRadius: 10, 
        width: "100%", 
        height: 45,
        paddingLeft: 15, 
        color: "white",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "600",
    },
    linkContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        top: "32%",
    },
    linkQuestion: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    linkText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline"

    }
});

export default styles;