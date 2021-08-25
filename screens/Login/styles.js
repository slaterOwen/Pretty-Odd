import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components";

const styles = StyleSheet.create({
    outterContainer: {
        width: "100%",
        height: Dimensions.get("screen").height,
        backgroundColor: "black",
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
});

export default styles;