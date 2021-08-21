import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    foodContainer: {
      width: '100%',
      height: Dimensions.get("screen").height,
      backgroundColor: "#333333",
    },
    titles: {
      marginTop: "20%",
      width: "100%",
      alignItems: "center",
    },
    title: {
      fontSize: 50,
      fontWeight: "600",
      color: "white",
    },
    subTitle: {
      fontSize: 20,
      fontStyle: "italic",
      color: "white",
    },
    image: {
      width: 250,
      height: 250,
      //resizeMode: "cover",
      position: "absolute",
      marginTop: "50%",
      marginLeft: 70,
      borderRadius: 125,
    },
    description: {
      width: "100%",
      alignItems: "center",
      marginTop: "90%",
      padding: 20,
    },
    dogDescription: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    buttonContainer: {
      position: "absolute",
      bottom: 40,
      width: "100%",
    },
  });

  export default styles;